const { Customer } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const customer = await Customer.create(req.body);
      res.send('Customer registered successfully');
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while registering the customer: ' + err,
      });
    }
  },

  async checkPhone(req, res) {
    try {
      const { phone } = req.body;
      const existingCustomer = await Customer.findOne({ where: { phone } });

      if (existingCustomer) {
        res.send(true);
      } else {
        res.send(false);
      }
    } catch (err) {
      res.status(400).send({
        error: 'Something went wrong: ' + err,
      });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.body;
      const customer = await Customer.findOne({ where: { id } });

      if (customer) {
        res.send(customer);
      } else {
        res.send('Customer not found');
      }
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while fetching the customer: ' + err,
      });
    }
  },

  async getAllCustomers(req, res) {
    try {
      const customers = await Customer.findAll();
      res.send(customers);
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while fetching all customers: ' + err,
      });
    }
  },

};
