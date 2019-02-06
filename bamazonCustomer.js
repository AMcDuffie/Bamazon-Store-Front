// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
host: "localhost",

// Your port; if not 3306
port: 3306,

// Your username
user: "root",

// Your password
password: "PASSsql",
database: "bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

// display product list
function queryAllProducts() {
    var query = connection.query("SELECT * FROM products", function(err, res) {
     console.log("-----------------------------------------------");
     console.log(" " + " | " + "Product" + " | " + "Department" + " | " + "Price" + " | " + "Quantity");
     console.log("-----------------------------------------------");  
       for (var i = 0; i < res.length; i++) {
       console.log(res[i].id + " | " + res[i].item_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity + " units");
     }
     console.log("-----------------------------------------------");
     idSearch();
  }); 
}

// call out my search function
function idSearch() {
  inquirer
    .prompt([
      {
      name: "id",
      type: "input",
      message: "Type in the product ID you wish to purchase?"
      },
      {
      name: "stock_quantity",
      type: "input",
      message: "How many units would you like to purchase?"
    }])
    .then(function(answer) {
        var query = "SELECT id, item_name, department_name, price, stock_quantity FROM products WHERE ?";
        connection.query(query, { id: answer.id }, function(err, res) {
      
      // substract the number of quantity user  wants from number of items in stock
        if(res[0].stock_quantity >= parseInt(answer.stock_quantity)) {
        
         var newStock = res[0].stock_quantity - parseInt(answer.stock_quantity);
         var purchasPrice = parseInt(answer.stock_quantity) * res[0].price;

         connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: newStock
      }, {
          id: answer.id
      }], function(err, res) {});

          console.log("Remainding units in stock:" + newStock);
          console.log("Your Total is: $"+ purchasPrice);

          console.log("===================================================");
          console.log("Transaction completed. Thank you for your Purchase.");
          console.log("===================================================");
        
        } else {
          
          console.log("===============================================================");
          console.log("Sorry, there are not enought units available for your purchase.");
          console.log("===============================================================");
        }
       });
     
     });
  
}
