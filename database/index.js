require('dotenv').config({ path: 'variables.env'});
var mongoose = require('mongoose');

const mongoDB = process.env.DATABASE;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Successfully connected to mongodb');
});

module.exports = mongoose;