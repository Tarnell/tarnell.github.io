const express = require('express');
const path = require('path');
const fs = require('fs');

const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express!' });
});

app.get('/api/getImages', (req, res) => {
  const assets = fs.readdirSync('./images');

  const fullpath = path.join(__dirname, `./images/${assets[req.query.asset]}`);
  res.sendFile(fullpath);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
