const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const keys = require('../config/keys');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: [] }).write();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = db
    .get('users')
    .find({ id })
    .value();

  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      const existingUser = db
        .get('users')
        .find({ googleId: profile.id })
        .value();

      if (existingUser) {
        return done(null, existingUser);
      }

      db
        .get('users')
        .push({ googleId: profile.id, id: shortid.generate() })
        .write();

      const newUser = db
        .get('users')
        .find({ googleId: profile.id })
        .value();

      done(null, newUser);
    }
  )
);
