// server/config/dbConfig.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'reactApp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function createTableIfNotExists() {
  try {
    const connection = await pool.getConnection();
//     await connection.execute(`
//       CREATE TABLE IF NOT u userrgister (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     firstName VARCHAR(255) NOT NULL,
//     lastName VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     phoneNumber VARCHAR(20) NOT NULL,
//     address VARCHAR(255) NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     postcode VARCHAR(20),
//     country VARCHAR(100) NOT NULL,
//     regionState VARCHAR(100) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

//     `);
    connection.release();
    // console.log('Table userrgister created or already exists');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}
    const connection = await pool.getConnection();
    
module.exports = {
  pool,
  createTableIfNotExists
};
