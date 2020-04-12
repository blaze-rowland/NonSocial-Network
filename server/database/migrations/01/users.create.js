const pool = require('../../db');

async function createUsers() {
  await pool.promise()
    .query(`
      CREATE TABLE Users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at DATETIME NOT NULL default CURRENT_TIMESTAMP,
        updated_at DATETIME default CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
    `)
    .catch((err) => console.error(err));
};

async function dropUsers() {

}

module.exports = { createUsers, dropUsers };