const { Product } = require('../models');

module.exports = {
  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body);
      res.send('Product created successfully');
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while creating the product: ' + err,
      });
    }
  },

  async editProductById(req, res) {
    try {
      const { id } = req.body;
      const product = await Product.findByPk(id);

      if (product) {
        await product.update(req.body);
        res.send('Product updated successfully');
      } else {
        res.send('Product not found');
      }
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while editing the product: ' + err,
      });
    }
  },

  async getProductById(req, res) {
    try {
      const { id } = req.body;
      const product = await Product.findByPk(id);
  
      if (product) {
        res.send(product);
      } else {
        res.send('Product not found');
      }
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while fetching the product: ' + err,
      });
    }
  },

  async getProductByName(req, res) {
    try {
      const { name } = req.body;
      const product = await Product.findOne({ where: { name } });
  
      if (product) {
        res.send(true);
      } else {
        res.send(false);
      }
    } catch (err) {
      res.status(500).send({ error: 'An error occurred while retrieving the product: ' + err });
    }
  },
  
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.send(products);
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while fetching the products: ' + err,
      });
    }
  },
};
