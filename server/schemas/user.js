const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },

  username: {
    type: String,
  },

  profileimage: {
    type: String,
  },

  position: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
