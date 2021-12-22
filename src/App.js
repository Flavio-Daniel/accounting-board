import './App.css';
import Ledger from './components/ledger'
import MovementsTable from './components/movements-table'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
