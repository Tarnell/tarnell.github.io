const express = require('express');

const port = 5000;
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
