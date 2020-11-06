import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [appState, setState] = useState({
    title: 'App Proventos',
    isModalOpen: false,
    data: {
      Proventos: [],
      aportes: []
    }
  });

  useEffect(() => {
    document.title = appState.title;
  });

  return (
    <>
      <header className="appHeader">
        <h1>{appState.title}</h1>
        <nav className="appNavigation">
          <button>+ Provento</button>
          <button>+ Aporte</button>
        </nav>
      </header>
      <main className="appContent"></main>
    </>
  );
}

export default App;
