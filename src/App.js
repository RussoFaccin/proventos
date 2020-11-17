import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import NewInfo from './components/new-info/NewInfo.component';

const App = () => {
  const [appState, setState] = useState({
    title: 'App Title',

    newInfo: {
      isVisible: false,
      infoKey: '',
      infoTitle: ''
    },

    data: {
      Proventos: [],
      aportes: []
    }
  });

  // Functions
  /**
   * Open NewInfo modal
   * @param {String} infoKey 
   */
  function openInfoModal(infoTitle, infoKey) {
    setState({
      ...appState,
      newInfo: {
        infoTitle: infoTitle,
        infoKey: infoKey,
        isVisible: true
      }
    })
  }

  function closeInfoModal() {
    setState({
      ...appState,
      newInfo: {
        isVisible: false
      }
    })
  }

  function saveData(infoData) {
    console.log('saveData', infoData);

    setState({
      ...appState,
      newInfo: {
        isVisible: false
      }
    })
  }

  useEffect(() => {
    document.title = appState.title;
  });

  const newInfoModal = appState.newInfo.isVisible ?
    <NewInfo
      title={appState.newInfo.infoTitle}
      infoKey={appState.newInfo.infoKey}
      saveAction={saveData}
      cancelAction={closeInfoModal}
    /> :
    null;

  return (
    <>
      <header className="appHeader">
        <h1>{appState.title}</h1>
        <nav className="appNavigation">
          <button onClick={() => openInfoModal('Proventos', 'proventos')}>+ Provento</button>
          <button onClick={() => openInfoModal('Aportes', 'aportes')}>+ Aporte</button>
        </nav>
      </header>
      <main className="appContent">
        {newInfoModal}
      </main>
    </>
  );
}

export default App;
