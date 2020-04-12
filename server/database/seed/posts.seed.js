const pool = require('../db');

async function seedPosts() {
  await pool.promise()
  .query(`
    INSERT INTO Posts (
      post_body,
      post_image,
      user_id,
      tag_id,
      post_created_at,
      post_updated_at
    )
    VALUES (
      'This is a test body',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=954&q=80',
      '1',
      '1',
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    )
  `)
  .catch((err) => console.error(err));
};

module.exports = seedPosts;