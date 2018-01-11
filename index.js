const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const keys = require('./config/keys');
const session = require('express-session');

const app = express();

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

app.use(
  session({
    secret: keys.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

app.get(
  '/auth/twitter',
  passport.authenticate('twitter', {
    scope: ['profile']
  })
);

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
