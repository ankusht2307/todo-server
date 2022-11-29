const express = require('express');
const app = express();

const port = process.env.PORT || 5200;

app.get('/', (req, res) => {
  res.send('Welcome to todo');
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
