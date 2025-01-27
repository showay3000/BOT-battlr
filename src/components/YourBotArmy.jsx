import React from 'react';
import '../App.css'; // Import the CSS file

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {army.map(bot => (
          <div 
            key={bot.id}
            className="bot-card"
          >
            <img 
              src={bot.avatar_url} 
              alt={bot.name} 
              className="bot-avatar"
            />
            <h3>{bot.name}</h3>
            <p className="bot-class">{bot.bot_class}</p>
            <div className="bot-stats">
              <span>❤️ {bot.health}</span>
              <span>⚔️ {bot.damage}</span>
              <span>🛡️ {bot.armor}</span>
            </div>
            <div className="bot-actions">
              <button 
                className="release-btn"
                onClick={() => onRelease(bot)}
              >
                Release
              </button>
              <button 
                className="discharge-btn"
                onClick={() => onDischarge(bot.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;