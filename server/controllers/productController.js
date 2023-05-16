const { Product } = require('../models');

module.exports = {


async newProduct(req, res) {
    try {
        const product = await Product.create(req.body);
        res.send("New product created: " + product.name);
    } catch (err) {
        res.status(400).send({
        error: "Something went wrong " + err
        });
    }
},

async editProductById(req, res) {
    try {
      const { id, name, manufacturer, style, purchase_price, sale_price, quantity_on_hand, commission_percentage } = req.body;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).send({ error: 'Product not found' });
      }

      product.name = name;
      product.manufacturer = manufacturer;
      product.style = style;
      product.purchase_price = purchase_price;
      product.sale_price = sale_price;
      product.quantity_on_hand = quantity_on_hand;
      product.commission_percentage = commission_percentage;

      await product.save();

      res.send(product);
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while updating the product: ' + err.message,
      });
    }
  },

async retrieveProductById(req, res) {
    try {
        const { id } = req.body;
        const product = await Product.findOne({ where: { id } });

        if (product) {
        res.send(product);
        } else {
        res.send("Product not found");
        }
    } catch (err) {
        res.status(400).send({
        error: 'An error occurred while fetching the product: ' + err.message
        });
    }
}
}