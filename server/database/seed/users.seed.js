const pool = require('../db');

async function seedUsers() {
  await pool.promise()
  .query(`
    INSERT INTO Users (
      name,
      email,
      password,
      created_at,
      updated_at
    )
    VALUES (
      'Blaze Rowland',
      'mail.browland@gmail.com',
      'test123',
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    )
  `)
  .catch((err) => console.error(err));
};

module.exports = seedUsers;