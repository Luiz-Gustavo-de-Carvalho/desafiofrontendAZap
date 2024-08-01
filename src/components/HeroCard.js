import React from 'react';
import './HeroCard.css';

const HeroCard = ({ hero, onHeroSelect, selected }) => {
  return (
    <div className={`hero-card ${selected ? 'selected' : ''}`} onClick={() => onHeroSelect(hero)}>
      <img src={hero.image_url} alt={hero.name} className="hero-image" />
      <h2 className="hero-name">{hero.name}</h2>
      <p className="hero-description">{hero.description}</p>
    </div>
  );
};

export default HeroCard;
