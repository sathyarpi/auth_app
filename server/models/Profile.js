const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: String,
  age: Number,
  dob: String,
  contact: String,
});

module.exports = mongoose.model('Profile', profileSchema);
