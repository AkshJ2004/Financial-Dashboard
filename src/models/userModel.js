const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  authentication: {
    password: { type: String, select: false },
    access_token: { type: String, select: false },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;