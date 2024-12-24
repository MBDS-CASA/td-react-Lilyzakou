import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RandomItem from './components/RandomItem';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Notes from './components/Notes';
import Etudiants from './components/Etudiants';
import Matieres from './components/Matieres';
import APropos from './components/APropos';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Notes':
        return <Notes />;
      case 'Etudiants':
        return <Etudiants />;
      case 'Matières':
        return <Matieres />;
      case 'A propos':
        return <APropos />;
      default:
        return <p>Selectionner un menu</p>;
    }
  };

  return (
    <>
      <div>
        <Header />
        <Menu selected={selectedMenu} onMenuClick={setSelectedMenu} />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setSelectedMenu('')}>
          Reset Menu
        </button>
      </div>
      {renderContent()}
      <MainContent />
      <RandomItem />
      <Footer />
    </>
  );
}

export default App;