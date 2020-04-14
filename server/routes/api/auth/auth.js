const passport = require('passport');
const express = require('express');
const router = express.Router();
const registerApi = require('./register');
const loginApi = require('./login');

registerApi(passport);
loginApi(passport);

router.post('/register', 
  passport.authenticate('local-register', { failureMessage: 'failed to register' }),
  (req, res) => {
    res.json({ msg: 'User Registered!' });
});

router.post('/login', 
  passport.authenticate('local-login', { failureMessage: 'failed to login' }),
  (req, res) => {
    res.json(req.user);
});

module.exports = router;
