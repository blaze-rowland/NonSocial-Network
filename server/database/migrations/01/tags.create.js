const pool = require('../../db');

async function createTags() {
  await pool.promise()
    .query(`
      CREATE TABLE Tags(
        tag_id INT NOT NULL AUTO_INCREMENT,
        tag_name VARCHAR(255) NOT NULL,
        tag_description VARCHAR(255) NOT NULL,
        tag_created_at DATETIME NOT NULL default CURRENT_TIMESTAMP,
        tag_updated_at DATETIME default CURRENT_TIMESTAMP,
        PRIMARY KEY (tag_id)
      )
    `)
    .catch((err) => console.error(err));
}

async function dropTags() {
  await pool.promise()
    .query(`
      DROP TABLE Tags
    `)
    .catch((err) => console.error(err));
}

module.exports = { createTags, dropTags };
