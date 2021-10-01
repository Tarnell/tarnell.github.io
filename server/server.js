const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!');
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const { user } = req.body;
  console.log('Adding user::::::::', user);
  users.push(user);
  res.json('user addedd');
});

app.get('/', (req, res) => {
  res.send('oooh !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
