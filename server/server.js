const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/conn');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist/index.html'));
});

app.post('/api/writeGuest', (req, res) => {
  const dbConnect = dbo.getDb();

  const { firstName, lastName, rsvpStatus } = req.query;

  const guestRsvp = {
    first_name: firstName,
    last_name: lastName,
    rsvp_status: rsvpStatus,
  };

  dbConnect
    .collection('guests')
    .insertOne(guestRsvp, (err, result) => {
      if (err) {
        res.status(400).send('Error inserting guest!');
      } else {
        console.log(`Added a new guest with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
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

dbo.connectToServer((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});
