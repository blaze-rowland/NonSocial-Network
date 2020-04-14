// - DEPENDENCIES -----------------------------
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

const app = express();
const PORT = process.env.API_PORT;


// - MIDDLEWARE -------------------------------
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
morgan('combined');


// - PASSPORT ---------------------------------
app.use(session({
  secret: process.env.API_SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// -- IMPORTS ---------------------------------
const usersApi = require('./routes/api/users');
const postsApi = require('./routes/api/posts');
const tagsApi = require('./routes/api/tags');
const authApi = require('./routes/api/auth/auth');


// - ROUTES-------------------------------------
app.get('/', (req, res) => res.json({ msg: 'Welcome to the AntiSocial Api! {💔🚫👫💔}'}));
app.use('/api/users', usersApi);
app.use('/api/posts', postsApi);
app.use('/api/tags', tagsApi);
app.use('/api/auth', authApi);


// - START SERVER ------------------------------
app.listen(PORT, () => console.log(`API Started on Port: ${PORT}`));

