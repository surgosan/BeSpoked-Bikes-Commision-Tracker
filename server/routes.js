module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello ERIK')
    })

    app.get('/salesPeople/checkPhone', (req, res) => {
        res.send(req.body.phone)
    })

    app.post('/checkPhone', async (req, res) => {
        const { phoneNumber } = req.body;
    
        try {
        const salesPerson = await models.Salesperson.findOne({
            where: { phone: phoneNumber },
        });
    
        if (salesPerson) {
            res.send(true); // phone number exists
        } else {
            res.send(false); // phone number does not exist
        }
        } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        }
    });

    app.post('/post', (req, res) => {
        res.send("Connection Complete! Msg: " + req.body.msg);
    })
}