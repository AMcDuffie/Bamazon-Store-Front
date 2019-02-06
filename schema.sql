CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

USE bamazondb;

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Tea Cups", "Kitchen", 10.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Cooking Pots", "Kitchen", 30.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Silverware", "Kitchen", 40.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Slippers", "Bath", 20.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Soap", "Bath", 15.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Tooth Past", "Bath", 7.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Towels", "Bath", 5.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("Radio", "Electronics", 50.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics", 900.00, 100);
INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 200.00, 100);