const pool = require('../db');

async function seedTags() {
  await pool.promise()
  .query(`
    INSERT INTO Tags (
      tag_name,
      tag_description,
      tag_created_at,
      tag_updated_at
    )
    VALUES (
      'Architecture',
      'The art and science of designing and erecting buildings.',
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    )
  `)
  .catch((err) => console.error(err));
};

module.exports = seedTags;