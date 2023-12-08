const mongoose = require('mongoose');

// const connectionString = 'mongodb://mongo:27017/cinema';
const connectionString = 'mongodb+srv://mongoadmin:mongoadmin@cluster0.l7scmny.mongodb.net/cinema';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
