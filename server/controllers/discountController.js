const { Discount } = require('../models');

module.exports = {
    async create(req, res) {
    try {
      const discount = await Discount.create(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send({
        error: 'An error occurred while creating the discount: ' + err,
      });
    }
  },

    async getById(req, res) {
    try {
        const { id } = req.body;
    
        const discount = await Discount.findOne({ where: { id } });
    
        if (discount) {
        res.send(discount);
        } else {
        res.status(404).send({
            error: 'Discount not found',
        });
        }
    } catch (err) {
        res.status(400).send({
        error: 'An error occurred while fetching the discount: ' + err.message,
        });
    }
    }
      
};
