const express = require('express');
const path = require('path');

const port = 5000;
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express!' });
});

app.get('/api/getImages', (req, res) => {
  const fullpath = path.join(__dirname, 'images/cat_01.jpg');
  res.sendFile(fullpath);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
