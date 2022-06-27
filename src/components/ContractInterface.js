import '../css/Contract.css';
import { ADDRESS, ABI } from '../Contract';

import { useEffect, useState } from 'react';
import Web3 from 'web3';

function ContractInterface(props) {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => { 
    getCandidiates();
  }, []);

  function voteFor(index) {
    const web3 = new Web3('http://localhost:7545');
    const election = new web3.eth.Contract(ABI, ADDRESS);

    election.methods.vote(index).send({from: props.address}, function(error, txnHash) {
      if (error) {  alert(error); } 
    });

    getCandidiates();
  }

  async function getCandidiates() {
    const web3 = new Web3('http://localhost:7545');
    const election = new web3.eth.Contract(ABI, ADDRESS);

    const count = await election.methods.count().call();
    const runners = [];
    for (var i=0; i < count; i++) {
      const runner = await election.methods.runners(i).call();
      runners.push(runner);
    }
    setCandidates(runners);
  }

  return (
    <div className="wrapper">
      <span className="header">Total Candidates: <span>{candidates.length}</span></span>
      <hr/>
      <ul>
      {
        Object.keys(candidates).map((runner, index) => (
          <li key={`${candidates[index].name}-${index}`}>
            <h4>{candidates[index].name}</h4>
            <span>{candidates[index].votes} votes</span>
            <button value={index} onClick={() => {voteFor(index)}}>Vote</button>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default ContractInterface;
