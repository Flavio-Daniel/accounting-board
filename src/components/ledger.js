import React, { useContext } from 'react';
import LedgerState from '../contexts/ledger-state'

const Ledger = () => {

  const [state, setState] = useContext(LedgerState);

  console.log(state)

  return (
    <div className="App-ledger">
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default Ledger;