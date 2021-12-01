const { MongoClient } = require('mongodb');
const { useCallback } = require('react');

const connectionString = 'mongodb+srv://Tarnell:9sssuG5UqD3hh3d@cluster0.7fc8r.mongodb.net/wedding_website?retryWrites=true&w=majority';

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      if (err || !db) {
        return useCallback(err);
      }

      dbConnection = db.db('wedding_website');
      console.log('Successfully connected to MongoDB');

      return callback();
    });
  },

  getDb: () => dbConnection,
};
