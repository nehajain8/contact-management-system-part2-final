var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User= require('./User');
var ContactSchema = new Schema({
  name: String,
  email: String,
  phonenumber: Number,
  group: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Contact', ContactSchema);