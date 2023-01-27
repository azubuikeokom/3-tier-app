const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

  app.get('/data', (req, res) => {

    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  app.post('/insert', (req, res) => {
    //const data = req.body;
    const {id,user,email,password}=req.body;
    const sql = `INSERT INTO users(id,name,email,password)VALUES(${id},"${user}","${email}","${password}");`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log('Data inserted into database');
      res.send('Data inserted into database');
    });
  });
  

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
