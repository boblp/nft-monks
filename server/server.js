const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ express: 'Backend connected to react app'});
});

app.listen(port, () => {
  console.log(`NFT Monks app listening on port ${port}`)
})