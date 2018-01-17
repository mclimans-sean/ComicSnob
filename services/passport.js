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
    (token, tokenSecret, profile, done) => {
      User.findOne({ twitterId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ twitterId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
