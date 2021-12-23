import './App.css';
import Ledger from './components/ledger'
import MovementsTable from './components/movements-table'
import LedgerState from './contexts/ledger-state'
import { React, useState, createContext } from 'react';

function App() {

  const handleOnClick = () => {

    const ledgerValues = state.values()

    //let groupedLedger = ledgerValues.reduce((entryMap, e) => entryMap.set(e.account, [...entryMap.get(e.account)||[], e]), new Map())


    // ledgerValues.map(console.log)
    console.log(ledgerValues)
    console.log(typeof(ledgerValues))

  }

  const initialState = new Map();
  const [state, setState] = useState(initialState); 

  return (
    <div className="App">
      <LedgerState.Provider value={[state, setState]}>
        <div className="App-container">
          <div className="App-menu">
            <button onClick={handleOnClick}>Menu</button>
            <button>Menu 2</button>
            <button>Menu 3</button>
          </div>
          <div className="logic-container">
            <div className="movements-container">
              <MovementsTable defaultRowsNumber={20}></MovementsTable>
            </div>
            <Ledger></Ledger>
          </div>
        </div>
      </LedgerState.Provider>
    </div>
  );
}

export default App;
