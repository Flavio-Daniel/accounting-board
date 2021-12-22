import './App.css';
import Ledger from './components/ledger'
import MovementsTable from './components/movements-table'
import LedgerState from './contexts/ledger-state'
import { React, useState, createContext } from 'react';

function App() {

  const initialState = new Map();
  const [state, setState] = useState(initialState); 

  return (
    <div className="App">
      <LedgerState.Provider value={[state, setState]}>
        <div className="App-container">
          <div className="App-menu">
            <button>Menu</button>
            <button>Menu 2</button>
            <button>Menu 3</button>
          </div>
          <div className="logic-container">
            <div className="movements-container">
              <MovementsTable defaultRowsNumber={10}></MovementsTable>
            </div>
            <div className="ledger-container">
              <Ledger></Ledger>
            </div>
          </div>
        </div>
      </LedgerState.Provider>
    </div>
  );
}

export default App;
