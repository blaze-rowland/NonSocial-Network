const pool = require('../db');

async function seedTags() {
  await pool.promise()
  .query(`
    INSERT INTO Tags (
      name,
      description,
      created_at,
      updated_at
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