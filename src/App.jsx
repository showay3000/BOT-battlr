import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use environment variable for API URL
  const apiUrl = import.meta.env.VITE_API_URL || "https://bots-si0g.onrender.com/bots";

  // Fetch bots data when component mounts
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBots(data);
        setError(null);
      } catch (err) {
        setError(`Error loading bots: ${err.message}. Please try again later.`);
        console.error('Error fetching bots:', err);
      } finally {
        setLoading(false);
      }
    };

    // Retry fetching after 5 seconds if there's an error
    if (error) {
      const retryTimeout = setTimeout(fetchBots, 5000);
      return () => clearTimeout(retryTimeout);
    }

    fetchBots();
  }, [apiUrl, error]);

  // Enlist a bot to your army (only if it's not already in the army)
  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release a bot from your army
  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  // Discharge a bot from both the army and backend
  const dischargeBot = async (botId) => {
    try {
      const response = await fetch(`${apiUrl}/${botId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Update state after successful discharge
      setArmy(army.filter(b => b.id !== botId));
      setBots(bots.filter(b => b.id !== botId));
      setError(null);
    } catch (err) {
      setError('Error discharging bot. Please try again.');
      console.error('Error discharging bot:', err);
    }
  };

  // Display loading message while fetching data
  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading bots...</p>
      </div>
    );
  }

  // Main render with error handling and components
  return (
    <div className="app-container">
      <h1 className="header">Bot Battlr</h1>
      
      {/* Show error message if there was an issue fetching data */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {/* Pass necessary props to YourBotArmy and BotCollection */}
      <YourBotArmy 
        army={army} 
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
      <BotCollection 
        bots={bots} 
        onEnlist={enlistBot}
      />
    </div>
  );
}

export default App;