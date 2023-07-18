// Create web server
var express = require('express');
var router = express.Router();

// Load mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost:27017/test');

// Create schema
var commentSchema = mongoose.Schema({
  Name: String,
  Comment: String
});

// Create model
var commentModel = mongoose.model('commentModel', commentSchema);

// Create document
var commentDocument = new commentModel({
  Name: 'John',
  Comment: 'I love this post!'
});

// Save document
commentDocument.save(function(err, data) {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log('Saved: ' + data);
  }
});

// Create route for comments
router.get('/', function(req, res, next) {
  res.send('Comments');
});

// Export module
module.exports = router;

