# Web3 Decentralized Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It relies on a local [Ganache](https://trufflesuite.com/ganache/)
blockchain to demonstrate basic [Web3](https://web3js.readthedocs.io/en/v1.7.4/) library calls to a smart contract. The contract, Election.sol, takes in an array of
candidate names and assigns them as a struct with a set number of votes. Accounts can then call a vote function only once to cast their vote in the election.


### Demo Run

Selecting account to view perspective from
![accounts](./img/1.png)

Voting for Clark Kent as Account 0 (0x1D8Aa7c706b4407fc75e1E502e9C8ABE65FC643E)
![vote1](./img/2.png)

More voting takes place
![vote2](./img/3.png)

Account 0 tries to vote again (Gets error due to already having voted)
![error](./img/4.png)

### References

[web3.js - Ethereum JavaScript AP](https://web3js.readthedocs.io/en/v1.7.4/)
[How to Build a Decentralized Full Stack App in Ethereum and React](https://medium.com/@takleakshar/how-to-build-a-decentralized-full-stack-app-in-ethereum-and-react-42e63d45a208)
[Build a Real-World dApp With React, Solidity, and Web3.js](https://betterprogramming.pub/blockchain-introduction-using-real-world-dapp-react-solidity-web3-js-546471419955)
