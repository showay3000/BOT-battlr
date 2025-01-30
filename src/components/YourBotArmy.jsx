import React from 'react';
import '../App.css'; // Import styles

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {/* Loop through the enlisted bots and display them */}
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            {/* Bot Image */}
            <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
            
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

            {/* Buttons to release or discharge the bot */}
            <div className="bot-actions">
              <button className="release-btn" onClick={() => onRelease(bot)}>
                Release
              </button>
              <button className="discharge-btn" onClick={() => onDischarge(bot.id)}>
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
