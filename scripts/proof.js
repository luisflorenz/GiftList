const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');

const merkleTree = new MerkleTree(niceList);
const name = "Sidney Kertzmann"; // Replace with the name you want to test
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);

console.log("Proof for", name, ":", proof);