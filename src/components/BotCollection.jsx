import React from 'react';
import '../App.css'; // Import the CSS file

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <div 
            key={bot.id} 
            className="bot-card"
            onClick={() => onEnlist(bot)}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;