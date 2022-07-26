const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Most_to_Coast',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;