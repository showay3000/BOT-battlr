import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]); // Store all bots
  const [army, setArmy] = useState([]); // Store enlisted bots
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch("https://bots-si0g.onrender.com/bots");

        if (!response.ok) throw new Error("Failed to fetch bots");
        const data = await response.json();
        setBots(data); // Save bots to state
      } catch (err) {
        setError("Error loading bots. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBots();
  }, []);

  // Add a bot to the army if it's not already enlisted
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  // Remove a bot from the army
  const releaseBot = (bot) => {
    setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  // Remove a bot completely from both the army and the server
  const dischargeBot = async (botId) => {
    try {
      const response = await fetch(`https://bots-si0g.onrender.com/bots/${botId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to discharge bot");

      // Remove bot from the army and bot list
      setArmy((prevArmy) => prevArmy.filter((b) => b.id !== botId));
      setBots((prevBots) => prevBots.filter((b) => b.id !== botId));
    } catch (err) {
      setError("Error discharging bot. Please try again.");
      console.error(err);
    }
  };

  // Show loading message while fetching data
  if (loading) return <div>Loading bots...</div>;
  // Show error message if there's an issue
  if (error) return <div>{error}</div>;

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {/* Display the enlisted bot army */}
      <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      {/* Display the list of available bots */}
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
