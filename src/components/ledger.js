import React, { useContext } from 'react';
import LedgerState from '../contexts/ledger-state'

const Ledger = () => {

  const [state, setState] = useContext(LedgerState);

  console.log(JSON.stringify([...state]))

  return (
    <div className="App-ledger" align="left">
      <pre>{JSON.stringify([...state], null, '\t')}</pre>
    </div>
  );
};

export default Ledger;