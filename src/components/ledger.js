import React, { useContext } from 'react';
import LedgerState from '../contexts/ledger-state'
import AccountContainer from '../components/account-container'

const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


const Ledger = () => {

  const [state, setState] = useContext(LedgerState);
  const stateValues = [...state.values()];
  const groupedAccounts = groupBy(stateValues, 'account');
  const groupedAccountsKeys = Object.keys(groupedAccounts);

  return (
    <div className="ledger-container">
      {groupedAccountsKeys.map(item => <AccountContainer account={groupedAccounts[item][0].account} items={groupedAccounts[item][0]}></AccountContainer>)}
    </div>
  );
};

export default Ledger;