const mariadb = require('mariadb');
require('dotenv').config({path: 'DatabaseProperties.env'});
const createDB = 'CREATE TABLE IF NOT EXISTS chattiService (name VARCHAR(255))';
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// eslint-disable-next-line require-jsdoc
async function createDatabase() {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(createDB);
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn.end();
  }
}

createDatabase();
