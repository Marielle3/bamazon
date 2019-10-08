DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(250) NOT NULL,
department_name VARCHAR(100) NOT NULL, 
price DECIMAL(10 , 2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (123, 'flat screen TV', 'Electronics', 500.00, 300),
	     (3, 'comforter', 'Home goods', 100, 10),
       (4, 'iphone charger', 'Electronics', 10.50, 25),
	     (22, 'perfume', 'Beauty', 50, 7),
       (9, 'pen', 'Office Supplies', 1.99, 50),
       (20, 'knit scarf', 'Clothing', 5.99, 435),
       (30, 'suitcase', 'Travel', 23.97, 444),
       (33, 'bow tie', 'Clothing', 4.99, 1000),
       (67, 'keurig k-cups', 'Grocery', 35, 537),
       (89, 'stainless steel watch','Jewelry', 57.50, 34),
       (90, 'bedroom lamp', 'Home goods', 73.99, 245);