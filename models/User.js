const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  image: String,
  wins: Number,
  winPercentage: Number,
  games: Number,
  createdAt: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
