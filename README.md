# BeSpoked-Bikes-Commision-Tracker

to help track the commission and determine each salesperson’s quarterly bonus

## They will need at a minimum the following components:

1. Data Layer
   1. Entities
      1. Products – Name, Manufacturer, Style, Purchase Price, Sale Price, Qty On Hand,
Commission Percentage

        2. Salesperson – First Name, Last Name, Address, Phone, Start Date, Termination
Date, Manager

        3. Customer – First Name, Last Name, Address, Phone, Start Date
 Sales – Product, Salesperson, Customer, Sales Date

        4. Discount – Product, Begin Date, End Date, Discount Percentage
        5. Seed with sample data for testing

2. Middle Tier
   1. Allows for client access to the data layer

3. Client
   1. Display a list of salespersons
   2. Update a salesperson
   3. Display a list of products
   4. Update a product
   5. Display a list of customers
   6. Display a list of sales. Optionally filter by date range. This should include the Product,
Customer, Date, Price, Salesperson, and Salesperson Commission.
    7. Create a sale
    8. Display a quarterly salesperson commission report

4. Additional Requirements
   1. Products – No duplicate product can be entered.
   2. Salespersons – No duplicate salesperson can be entered.