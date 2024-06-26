const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = 'your_merkle__root_here';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const { name, proof} = req.body;

  // TODO: prove that a name is in the list 
  const isInTheList = verifyProof(proof, name, Buffer.from(MERKLE_ROOT, 'hex'));
  
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
