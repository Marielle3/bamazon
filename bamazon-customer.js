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

seeProducts().then(function(result){
  result.forEach(function(products){
    console.log('\nItem ID: ' + products.item_id + '\nProduct: ' + products.product_name + '\nDepartment: ' + products.department_name  + '\nPrice: ' + products.price + '\nStock Quantity: ' + products.stock_quantity);
  });
  .then(function(){
    return goShopping();
  });
});

function seeProducts() {
    return new Promise(function(resolve, reject) {
        // query for all items in products table
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) reject(err);
            resolve(res);
        });
    });
}
connection.end();
seeProducts();

//TODO create goShopping function 