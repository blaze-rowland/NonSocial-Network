const LocalStrategy = require('passport-local').Strategy;
const pool = require('../../../database/db');
const bcrypt = require('bcrypt');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    pool
      .query(`SELECT * FROM Users WHERE user_id = '${id}'`, 
      (err,rows) => done(err, rows[0]));
  });

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  (req, email, password, done) => { 
    pool
      .query(`SELECT * FROM Users WHERE email = '${email}'`, 
        (err, rows) => {
          if (err) return done(err);
          
          if (!rows.length) {
            return done(null, false); 
          } 

          bcrypt.compare(password, rows[0].password, (err, res) => {
            if (err) throw new Error(err);

            if (res === true) {
              return done(null, rows[0])
            } else {
              return done(null, false);
            }
          });
    });
  }));
}
