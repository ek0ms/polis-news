const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
