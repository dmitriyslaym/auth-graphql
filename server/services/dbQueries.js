const mongoose = require('mongoose');

const User = mongoose.model('user');

function getAllUsers() {
  return User.find();
}

module.exports = { getAllUsers };
