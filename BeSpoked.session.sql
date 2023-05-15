-- I created the MYSQL database before hand with the MYSQL workbench
-- @block
CREATE TABLE Products(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    manufacturer VARCHAR(255) NOT NULL,
    style VARCHAR(255),
    purchase_price 
)