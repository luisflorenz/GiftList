const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');

const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();

console.log("Merkle Root:", root.toString('hex'));