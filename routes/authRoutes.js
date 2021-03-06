const passport = require('passport');
const keys = require('../config/keys');
const session = require('express-session');

module.exports = app => {
  app.use(
    session({
      secret: keys.sessionSecret,
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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
