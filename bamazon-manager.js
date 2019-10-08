var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jospar3233!",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  // runSearch();
});
