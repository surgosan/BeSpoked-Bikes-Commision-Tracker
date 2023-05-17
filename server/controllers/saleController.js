const { Product, Salesperson, Customer, Sales } = require('../models');

module.exports = {
  async createSale(req, res) {
    try {
      const { product_id, salesperson_id, customer_id, sales_date } = req.body;
      console.log(req.body);

      const sale = await Sales.create({
        product_id,
        salesperson_id,
        customer_id,
        sales_date,
      });
      res.send(sale);
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while creating the sale: ' + err.message,
      });
    }
  },

  async getSaleById(req, res) {
    try {
      const { id } = req.body;
  
      const sale = await Sales.findByPk(id, {
        include: [Product, Salesperson, Customer],
      });
  
      if (!sale) {
        return res.status(404).send({ error: 'Sale not found' });
      }
  
      res.send(sale);
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while fetching the sale: ' + err.message,
      });
    }
  },
  async getAllSales(req, res) {
    try {
      const sales = await Sales.findAll();
      res.send(sales);
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred while fetching the sales: ' + err,
      });
    }
  },
};
