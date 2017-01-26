var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  image: String,
  created_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;
