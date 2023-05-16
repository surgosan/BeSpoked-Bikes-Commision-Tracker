const { Discount } = require('../models');

module.exports = {
    async create(req, res) {
        try {
          const { product_id, begin_date, end_date, discount_percentage } = req.body;
    
          const discount = await Discount.create({
            product_id,
            begin_date,
            end_date,
            discount_percentage
          });
    
          res.send(discount);
        } catch (err) {
          res.status(400).send({
            error: 'An error occurred while creating the discount: ' + err.message
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
