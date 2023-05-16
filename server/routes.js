const salesPersonController = require('./controllers/salesPersonController');
const productController = require('./controllers/productController');
const salesController = require('./controllers/saleController');
const customerController = require('./controllers/customerController');
const discountController = require('./controllers/discountController');

module.exports = (app) => {
    app.get('/', (req, res) => {res.send('Hello ERIK')})

    app.post('/salesPeople/new',salesPersonController.register)
    app.get('/salesPeople/checkPhone', salesPersonController.checkPhoneNumber)
    app.get('/salesPeople/get',salesPersonController.findById)
    
    app.post('/products/new', productController.newProduct);
    app.put('/products/edit', productController.editProductById);
    app.get('/product/get', productController.retrieveProductById);

    app.post('/sales/new', salesController.createSale);
    app.post('/sales/get', salesController.getSaleById);

    app.post('/customers/new', customerController.register);
    app.get('/customers/checkPhone', customerController.checkPhone);
    app.post('/customers/get', customerController.getById);

    app.post('/discounts/new', discountController.create);
    app.get('/discounts/get', discountController.getById);

    app.post('/post', (req, res) => {
        res.send("Connection Complete! Msg: " + req.body.msg);
    })
}