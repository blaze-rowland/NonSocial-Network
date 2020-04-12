const pool = require('../../db');

async function createTags() {
  await pool.promise()
    .query(`
      CREATE TABLE Tags(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        created_at DATETIME NOT NULL default CURRENT_TIMESTAMP,
        updated_at DATETIME default CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
    `)
    .catch((err) => console.error(err));
}

async function dropTags() {

}

module.exports = { createTags, dropTags };
