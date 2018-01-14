const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  twitterId: Number
});

mongoose.model('users', userSchema);
