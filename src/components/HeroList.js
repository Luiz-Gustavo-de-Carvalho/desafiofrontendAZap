import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({ heroes, onHeroSelect, selectedHeroes }) => {
  return (
    <div className="hero-list">
      {heroes.map(hero => (
        <HeroCard
          key={hero.id}
          hero={hero}
          onHeroSelect={onHeroSelect}
          selected={selectedHeroes.includes(hero)}
        />
      ))}
    </div>
  );
};

export default HeroList;
