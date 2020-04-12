// - DEPENDENCIES ------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.API_PORT || 3333;

// - MIDDLEWARE -------------------------------
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
morgan('combined');

// -- IMPORTS ---------------------------------
const usersApi = require('./routes/api/users');
const postsApi = require('./routes/api/posts');
const tagsApi = require('./routes/api/tags');

// - ROUTES-------------------------------------
app.get('/', (req, res) => res.json({ msg: 'Welcome to the AntiSocial Api! {💔🚫👫💔}'}));
app.use('/api/users', usersApi);
app.use('/api/posts', postsApi);
app.use('/api/tags', tagsApi);

// - START SERVER ------------------------------
app.listen(PORT, () => console.log(`API Started on Port: ${PORT}`));

