const LocalStrategy = require('passport-local').Strategy;
const pool = require('../../../database/db');
const bcrypt = require('bcrypt');

const { CreateUserModel } = require('../../../models/user.model');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    pool
      .query(`SELECT * FROM Users WHERE user_id = '${id}'`, 
      (err,rows) => done(err, rows[0]));
  });

  passport.use('local-register', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, (req, email, password, done) => {
    pool
      .query(`SELECT * FROM Users WHERE email = '${email}'`, 
        (err, rows) => {
          if (err) return done(err);

          if (rows.length) {
            return done(null, false);
          } else {
            const newUser = new CreateUserModel();
            newUser.user_id = null;
            newUser.full_name = req.body.fullName;
            newUser.profile_image = req.body.profileImage;
            newUser.email = email;
            newUser.password = password; 
          
            bcrypt.hash(newUser.password, 8, (hashErr, hashPass) => {
              if (hashErr) done(hashErr);

              const insertQuery = `
                INSERT INTO Users (
                  full_name,
                  email,
                  profile_image,
                  password,
                  user_created_at,
                  user_updated_at
                ) VALUES (
                  '${newUser.full_name}',
                  '${newUser.email}',
                  '${newUser.profile_image}',
                  '${hashPass}',
                  CURRENT_TIMESTAMP,
                  CURRENT_TIMESTAMP
                )
              `;

              pool.query(insertQuery, (insertErr, rows) => {
                if (insertErr) done(insertErr);

                newUser.user_id = rows.insertId;
                return done(null, newUser);
              });	
            });
          }	
      });
  }));
}
