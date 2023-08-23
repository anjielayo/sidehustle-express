const express = require("express");

const app = express();
const port = 3000;

app.get ('/', (req, res, next) => {
const mysql = require( 'mysql')
const connection = mysql.createConnection({
host: 'localhost' ,
user: 'dbuser', 
password: 's3kreee?', 
database:'my_db'
})

connection.connect ()
connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) =>{
if (err) throw err

console.log('The solution is: ', rows[0].solution)
})

connection.end()
next()

}, (req, res) => {
res.send('I connected to the database');
});

app.listen(port, ()=>{
console.log(`Example app listening on port S{port}`)
})
