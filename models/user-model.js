const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: String,
  googleId: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
