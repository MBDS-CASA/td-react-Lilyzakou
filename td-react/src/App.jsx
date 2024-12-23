import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function Header(){
    return (
        <header style={{textAlign: "center", margin: "20px 0"}}>
            <img
                src="/src/assets/logo.png"
                alt="Logo Formation"
                style={{width: "100px"}}
            />
            <h1>Introduction à React</h1>
            <h2>A la découverte des premières notions de React</h2>
        </header>
    )
}



function MainContent() {
    const now = new Date();
    const day = now.toLocaleString('default', { weekday: 'long' });
    const month = now.toLocaleString('default', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <p>Bonjour, on est le {day}, {date} {month} {year} et il est {hours}:{minutes}:{seconds}</p>
        </div>
    );
}



function Footer () {
    return (
        <footer
            style={{
                textAlign: "center",
                bottom: "10px",
                width: "100%",
            }}
        >
            <p>Tous droits réservés - Issa Zakou Halima</p>
        </footer>
    )}
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>

                <Header/>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
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
            <Footer/>
    </>

  )
}

export default App
