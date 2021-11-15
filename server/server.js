const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express!' });
});

app.get('/api/getImages', (req, res) => {
  const assets = fs.readdirSync('../images');
  const imageURLs = [];

  const { page, limit } = req.query;

  const start = parseInt(page, 10) * 10;
  const end = start + parseInt(limit, 10);

  for (let i = start; i < end; i += 1) {
    const fullpath = path.join(__dirname, `./images/${assets[end]}`);

    imageURLs.push(fullpath);
  }

  const responseObject = { urls: imageURLs };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(responseObject));
});

app.use('/', express.static(path.join(__dirname, '/dist')));

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
