import { React } from 'react';

const AccountHeader = ({ account }) => {
  return (
    <div className="account-header">
      {account}
    </div>
  );
}

const AccountDebits = () => {
  return (
    <div className="account-debits">
      <p>id</p><p>amount</p>
      <p>id</p><p>amount</p>
      <p>id</p><p>amount</p>
    </div>
  );
}

const AccountCredits = () => {
  return (
    <div className="account-credits">
      <p>id</p><p>amount</p>
      <p>id</p><p>amount</p>
      <p>id</p><p>amount</p>
    </div>
  );
}

const AccountMovements = ({ account }) => {
  return (
    <div className="account-movements">
      <AccountDebits></AccountDebits>
      <AccountCredits></AccountCredits> 
    </div>
  );
}


const AccountContainer = ({ account, items }) => {
  console.log(items[0])
  return (
      <div className="account-container">
        <AccountHeader account={account}></AccountHeader>
        <AccountMovements></AccountMovements>
      </div>
  );
};

export default AccountContainer;