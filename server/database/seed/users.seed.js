const pool = require('../db');

async function seedUsers() {
  await pool.promise()
  .query(`
    INSERT INTO Users (
      full_name,
      email,
      profile_image,
      password,
      user_created_at,
      user_updated_at
    )
    VALUES (
      'Blaze Rowland',
      'mail.browland@gmail.com',
      'https://avatars2.githubusercontent.com/u/27295533?s=460&u=9bc5a5cbfd2921e215455fbb7a6cee51f11c11f7&v=4',
      'test123',
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    )
  `)
  .catch((err) => console.error(err));
};

module.exports = seedUsers;