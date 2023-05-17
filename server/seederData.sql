-- Insert the salesperson records
INSERT INTO salespeople (phone, first_name, last_name, address, start_date, termination_date, manager)
VALUES
  ('1234567890', 'John', 'Doe', '123 Main St', '2022-01-01', NULL, 'Jane Smith'),
  ('0987654321', 'Jane', 'Smith', '456 Elm St', '2022-02-01', NULL, 'John Doe'),
  ('1112223333', 'Michael', 'Johnson', '789 Oak St', '2022-03-01', NULL, 'Jane Smith'),
  ('4445556666', 'Emily', 'Davis', '321 Maple Ave', '2022-04-01', NULL, 'John Doe'),
  ('7778889999', 'Sarah', 'Wilson', '654 Pine Rd', '2022-05-01', NULL, 'Jane Smith'),

-- Output a success message


-- Insert the customer records
INSERT INTO customers (first_name, last_name, phone, address, start_date)
VALUES
  ('John', 'Doe', '1234567890', '123 Main St', '2022-01-01'),
  ('Jane', 'Smith', '9876543210', '456 Elm St', '2022-02-01'),
  ('Michael', 'Johnson', '5551234567', '789 Oak St', '2022-03-01'),
  ('Emily', 'Davis', '7775551234', '456 Pine St', '2022-04-01'),
  ('David', 'Anderson', '8889990000', '789 Maple Ave', '2022-05-01'),

-- Output a success message
SELECT 'Seeder data for Customer table created successfully.' AS Message;


-- Insert the product records
INSERT INTO products (name, manufacturer, style, purchase_price, sale_price, quantity_on_hand, commission_percentage)
VALUES
  ('Product A', 'Manufacturer A', 'Style A', 10.99, 19.99, 50, 5),
  ('Product B', 'Manufacturer B', 'Style B', 15.99, 29.99, 30, 8),
  ('Product C', 'Manufacturer C', 'Style C', 8.99, 14.99, 20, 3),
  ('Product D', 'Manufacturer D', 'Style D', 12.99, 24.99, 40, 6),
  ('Product E', 'Manufacturer E', 'Style E', 9.99, 19.99, 60, 4),

-- Output a success message
SELECT 'Seeder data for Product table created successfully.' AS Message;


-- Insert the sales records
INSERT INTO sales (product_id, salesperson_id, customer_id, sales_date)
VALUES
  (1, 1, 1, '2022-01-01'),
  (2, 2, 2, '2022-01-02'),
  (3, 3, 3, '2022-01-03'),
  (4, 4, 4, '2022-01-04'),
  (5, 5, 5, '2022-01-05'),

-- Output a success message
SELECT 'Seeder data for Sales table created successfully.' AS Message;


-- Insert the discount records
INSERT INTO discounts (product_id, begin_date, end_date, discount_percentage)
VALUES
  (1, '2022-01-01', '2022-01-31', 10),
  (2, '2022-02-01', '2022-02-28', 20),
  (3, '2022-03-01', '2022-03-31', 15),
  (4, '2022-04-01', '2022-04-30', 25),
  (5, '2022-05-01', '2022-05-31', 12),

-- Output a success message
SELECT 'Seeder data for Discount table created successfully.' AS Message;
