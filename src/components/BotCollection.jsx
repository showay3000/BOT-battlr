import React from 'react';
import '../App.css'; // Import styles

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {/* Loop through the list of bots and display them */}
        {bots.map(bot => (
          <div 
            key={bot.id} 
            className="bot-card"
            onClick={() => onEnlist(bot)} // Add bot to the army when clicked
          >
            {/* Bot Image */}
            <img 
              src={bot.avatar_url} 
              alt={bot.name} 
              className="bot-avatar"
            />

            {/* Bot Name */}
            <h3>{bot.name}</h3>

            {/* Bot Class */}
            <p className="bot-class">{bot.bot_class}</p>

            {/* Bot Stats (Health, Damage, Armor) */}
            <div className="bot-stats">
              <span> {bot.health}</span>
              <span> {bot.damage}</span>
              <span> {bot.armor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
