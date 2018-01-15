// keys.js - figure out which credentials to use
if (process.env.NODE_ENV === 'production') {
  // production mode - return prod keys
  module.exports = require('./prod');
} else {
  // development mode - return dev keys
  module.exports = require('./dev');
}
