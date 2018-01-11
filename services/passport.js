const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const keys = require('../config/keys');

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://127.0.0.1:5000/auth/twitter/callback'
    },
    (token, tokenSecret, profile, done) => {
      console.log('token: ', token);
      console.log('tokenSecret: ', tokenSecret);
      console.log('profile: ', profile);
    }
  )
);
