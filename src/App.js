import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import NewInfo from './components/new-info/NewInfo.component';
import AppChart from './components/app-chart/AppChart.coomponent';
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
    
    const found = dataList.findIndex((entry) => {
      return entry.id === infoData.id
    });

    if (found === -1) {
      dataList.push(infoData);
    } else {
      dataList.splice(found, 1, infoData)
    }

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

  function deleteItem(item) {
    const dataList = appState.data[item.type];
    
    const found = dataList.findIndex((entry) => {
      return entry.id === item.id;
    });

    if (found === -1) {
      return false;
    }

    dataList.splice(found, 1);

    setState({
      ...appState,
      data: {
        [item.type]: dataList
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
        <AppChart />
        <OrderList listEntry={appState.data.proventos} actionSelect={selectItem} actionDelete={deleteItem} />
      </main>
      {newInfoModal}
    </>
  );
}

export default App;
