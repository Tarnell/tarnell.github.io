const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express!' });
});

app.get('/api/getImage', (req, res) => {
  const { assetId } = req.query;

  const filePath = path.join(__dirname, `/images/${assetId}`);

  res.sendFile(filePath);
});

app.get('/api/getImages', (req, res) => {
  const assets = fs.readdirSync(path.join(__dirname, '/images'));
  const images = [];

  const { page, limit } = req.query;

  const start = parseInt(page, 10) * limit;
  const end = start + parseInt(limit, 10);

  for (let i = start; i < end; i += 1) {
    images.push({
      assetId: assets[i],
    });
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(images));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
