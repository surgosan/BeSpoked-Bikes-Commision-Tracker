const { Salesperson } = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const person = await Salesperson.create(req.body);
            res.send("Very cool " + person.first_name)
        } catch (err) {
            res.status(400).send({
                error: "Something went wrong " + err
            })
        }
    },

    async checkPhoneNumber(req, res) {
        try {
            const { phone } = req.body;
            const existingPerson = await Salesperson.findOne({ where: { phone } });

            if (existingPerson) {
                res.send(true);
            } else {
                res.send(false);
            }
        } catch (err) {
            res.status(400).send({
                error: 'Something went wrong ' + err,
            });
        }
    },

    async findById(req, res) {
        try {
          const id = req.body.id
          const salesperson = await Salesperson.findOne({ where: { id } })
    
          if(salesperson) {
            res.send(salesperson.first_name)
          }
          else{
            res.send("Salesperson not found")
          }
    
          
        } catch (err) {
          return res.status(400).send({
            error: 'An error occurred while fetching the salesperson: ' + err.message
          })
        }
    }
}