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
  // search items
seeProducts().then(function(result){
  result.forEach(function(products){
    console.log('\nItem ID: ' + products.item_id + '\nProduct: ' + products.product_name + '\nDepartment: ' + products.department_name  + '\nPrice: ' + products.price + '\nStock Quantity: ' + products.stock_quantity);
  });
  }).then(function(){
    return goShopping();
  });
});

function seeProducts() {
    return new Promise(function(resolve, reject) {
        // query for all items in products table
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) reject(err);
            console.log(res);
            resolve(res);
        });
    });
}

//TODO create goShopping function 
function goShopping(){
  inquirer.prompt([{
      name: 'item_id',
      message: 'What is the ID',
      type: 'number',
      validate: function(value) {
        if (isNaN(value) === false) {
            return true;
        }
        else {
          console.log('\nPlease enter a valid ID');
          return false;
        }
       }
  }, {
    // asks user how may units they want of that item 
    name: 'stock_quantity',
    message: 'How much do you want?',
    type: 'number',
    validate: function(value) {
          if (isNaN(value) === false) {
            return true;
        }
        else {
          console.log('\nPlease enter a valid quantity');
          return false;
        }
       }
      //  unsure here if i should use update, instead I used SELECT to select the ID and then return 
      // the updated units
  }]).then(function(answer) {
          connection.query("SELECT * FROM products WHERE item_id=?", answer.item_id, function(err, res) {
            if (err) reject(err);
            resolve(res);
        });
  }).then(function(result) {
    if (answer.stock_quantity > result[0].stock_quantity) {
      return "Insufficient quantity!";
    }
    else {
      var object = stock_quantity;
      var object = {};
      object.answer = answer;
      object.result = result;
      return object;
    }
//   }).then(function(object) {
//             // if there was sufficient quantity
//             if (object.answer) {
//                 var newQuantity = object.result[0].stock_quantity - object.answer.stock_quantity;
//                 var item = object.answer.item_id;
//                 var totalCost = (object.result[0].price * object.answer.stock_quantity).toFixed(2);
//                 // query that updates the quantity of the item
//                 connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [newQuantity, item], function(err, res) {
//                     if (err) reject(err);
//                     console.log('Your total cost is $' + totalCost);
//                     // end connection
//                     connection.end();
//                 });
//             } else {
//                 console.log(object);
//                 // end connection
//                 connection.end();
//             }
//     });
// }
