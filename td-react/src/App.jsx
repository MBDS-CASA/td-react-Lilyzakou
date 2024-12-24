import reactLogo from'./assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RandomItem from './components/RandomItem';
import Footer from './components/Footer';
import Menu from "./components/Menu.jsx";

import { getRandomItem } from './utils';





function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <Header />
                <Menu/>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <MainContent />
            <RandomItem />
            <Footer />
        </>
    );
}



export default App
