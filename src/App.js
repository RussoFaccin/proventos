import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import NewInfo from './components/new-info/NewInfo.component';
import OrderList from './components/order-list/OrderList';

// Utils
import { StringUtils } from './utils/StringUtils';

const App = () => {
  const [appState, setState] = useState({
    title: 'App Title',

    newInfo: {
      isVisible: false,
      infoKey: '',
      infoTitle: '',
      selectedData: null
    },

    data: {
      proventos: [],
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
    const dataList = appState.data[infoData.type];
    dataList.push(infoData);

    setState({
      ...appState,
      newInfo: {
        isVisible: false
      },
      data: {
        [infoData.type]: dataList
      }
    })
  }

  function selectItem(item) {
    setState({
      ...appState,
      newInfo: {
        isVisible: true,
        infoKey: item.type,
        infoTitle: StringUtils.capitalize(item.type),
        selectedData: item
      }
    })
  }

  useEffect(() => {
    document.title = appState.title;
  });

  const newInfoModal = appState.newInfo.isVisible ?
    <NewInfo
      order={appState.newInfo.selectedData}
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
        <OrderList listEntry={appState.data.proventos} actionSelect={selectItem} />
      </main>
      {newInfoModal}
    </>
  );
}

export default App;
