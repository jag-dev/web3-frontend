// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Election {
    struct Candidate {
        string name;
        uint votes;
    }

    uint public count = 0;
    mapping(uint => Candidate) public runners;
    mapping(address => bool) voters;

    constructor(string[] memory candidates) {
      for (uint i = 0; i < candidates.length; i++) {
            runners[i] = Candidate(candidates[i], 0);
        }   
        count = candidates.length;
    }

    function vote(uint candidate) external {
        require(voters[msg.sender] == false, "You have already voted");
        Candidate storage c = runners[candidate];
        c.votes += 1;
        voters[msg.sender] = true;
    }

    function getVotes(uint candidate) public view returns (uint) { return runners[candidate].votes; }
    
    function getName(uint candidate) public view returns (string memory) { return runners[candidate].name; }
}
