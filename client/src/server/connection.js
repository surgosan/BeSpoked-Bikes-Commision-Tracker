import Api from "./Api";

export default {
  // Salesperson routes
  registerSalesperson(salespersonData) {
    return Api().post('/salesPeople/new', salespersonData);
  },
  checkSalespersonPhone(phoneNumber) {
    return Api().post('/salesPeople/checkPhone', { phone: phoneNumber });
  },
  getSalespersonById(salespersonId) {
    return Api().post('/salesPeople/get', { id: salespersonId });
  },
  getAllSalespeople() {
    return Api().get('/salesPeople/getAll');
  },  

  // Product routes
  createProduct(productData) {
    return Api().post('/products/new', productData);
  },
  editProductById(productId, productData) {
    return Api().put(`/products/edit`, { id: productId, ...productData });
  },
  getProductById(productId) {
    return Api().get('/product/get', { id: productId });
  },

  // Sale routes
  createSale(saleData) {
    return Api().post('/sales/new', saleData);
  },
  getSaleById(saleId) {
    return Api().post('/sales/get', { id: saleId });
  },

  // Customer routes
  createCustomer(customerData) {
    return Api().post('/customers/new', customerData);
  },
  checkCustomerPhone(phoneNumber) {
    return Api().get('/customers/checkPhone', { phone: phoneNumber });
  },
  getCustomerById(customerId) {
    return Api().post('/customers/get', { id: customerId });
  },

  // Discount routes
  createDiscount(discountData) {
    return Api().post('/discounts/new', discountData);
  },
  getDiscountById(discountId) {
    return Api().get('/discounts/get', { id: discountId });
  },

  // Other routes...
};
