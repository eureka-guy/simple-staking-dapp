import './App.css';
import Wallet from './Wallet.jsx';
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [account, setAccount] = useState([])
  const [web3, setWeb3] = useState(new Web3(window.ethereum))

  return (
    <div className="App">
      <div>
        <Wallet
        account={account}
        setAccount={setAccount}
        web3={web3}
        setWeb3={setWeb3}
        />
      </div>
    </div>
  );
}

export default App;
