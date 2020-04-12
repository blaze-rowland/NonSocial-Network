const pool = require('../db');

async function seedPosts() {
  await pool.promise()
  .query(`
    INSERT INTO Posts (
      body,
      image,
      user_id,
      tag_id,
      created_at,
      updated_at
    )
    VALUES (
      'This is a test body',
      'https://unsplash.com/photos/6uZLp-8rgQo',
      '1',
      '1',
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    )
  `)
  .catch((err) => console.error(err));
};

module.exports = seedPosts;