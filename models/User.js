const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  twitterId: Number,
  name: String,
  image: String
});

mongoose.model('users', userSchema);
