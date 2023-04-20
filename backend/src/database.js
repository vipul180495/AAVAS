const mysql = require("mysql");

var connection = mysql.createConnection({
    host:'localhost',
    database:'dreamhome',
    user:'root',
    password:'Vi@ul18041995',
    multipleStatements: true
})

module.exports = connection;