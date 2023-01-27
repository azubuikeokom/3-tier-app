const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.ROOT_USERNAME,
  password: process.env.ROOT_PASSWORD,
  database: 'zubydb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

const createUsersTable = `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
)`;

const createOrdersTable = `CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`;

connection.query(createUsersTable, (err, result) => {
  if (err) throw err;
  console.log("Users table created");
});

connection.query(createOrdersTable, (err, result) => {
  if (err) throw err;
  console.log("Orders table created");
});

connection.end();