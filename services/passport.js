const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterConsumerKey,
      consumerSecret: keys.twitterConsumerSecret,
      callbackURL: '/auth/twitter/callback',
      proxy: true
    },
    function(token, tokenSecret, profile, done) {
      var searchQuery = {
        twitterId: profile.id
      };

      var updates = {
        name: profile.username,
        image: profile.photos[0].value
      };

      var options = {
        upsert: true
      };

      User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
        if (err) {
          return done(err);
        } else {
          return done(null, user);
        }
      });
    }
  )
);
