import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    axios.get('https://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then(response => {
        setHeroes(response.data);
        setFilteredHeroes(response.data);
      })
      .catch(error => console.error('Erro ao buscar heróis:', error));
  }, []);

  const handleSearch = (query) => {
    const filtered = heroes.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredHeroes(filtered);
  };

  const handleHeroSelect = (hero) => {
    setSelectedHeroes(prevSelected => {
      if (prevSelected.includes(hero)) {
        return prevSelected.filter(h => h.id !== hero.id);
      } else {
        return [...prevSelected, hero];
      }
    });
  };

  const handleBattle = () => {
    if (selectedHeroes.length >= 2) {
      const winner = selectedHeroes.reduce((prev, current) => {
        const prevPower = Object.values(prev.powerstats).reduce((a, b) => a + b, 0);
        const currentPower = Object.values(current.powerstats).reduce((a, b) => a + b, 0);
        return (prevPower > currentPower) ? prev : current;
      });
      setWinner(winner);
    }
  };

  const closeModal = () => {
    setWinner(null);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleBattle} disabled={selectedHeroes.length < 2}>
        Iniciar Batalha
      </button>
      <HeroList heroes={filteredHeroes} onHeroSelect={handleHeroSelect} selectedHeroes={selectedHeroes} />
      {winner && <Modal hero={winner} onClose={closeModal} />}
    </div>
  );
};

export default App;
