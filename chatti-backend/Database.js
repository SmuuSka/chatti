const mariadb = require('mariadb');

const sql = 'CREATE TABLE testi (name VARCHAR(255))';
const pool = mariadb.createPool({
  host: '10.114.32.6',
  port: '3306',
  user: 'root',
  password: 'mypass',
  database: 'chattidb',
});

// eslint-disable-next-line require-jsdoc
async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(sql);
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}

asyncFunction();
