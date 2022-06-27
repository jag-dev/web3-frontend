import './css/App.css';
import Account from './components/Account';
import ContractInterface from './components/ContractInterface';

import { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    changeAccount(0);
  }, []);

  async function changeAccount(newIndex) {
    const web3 = new Web3('http://localhost:7545');
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[newIndex]);
  }

  return (
    <div className="App">
      <Account account={account} onChange={changeAccount}/>
      <header className="App-header">
        <div>
          <ContractInterface address={account}/>
        </div>
      </header>
    </div>
  );
}

export default App;
