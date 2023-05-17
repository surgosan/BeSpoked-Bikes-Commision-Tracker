<template>
  <h1 class="card-title">Sales</h1>

  <div class="options">
    <label for="filter">Filter By: </label>
    <select name="filter" v-model="selectedFilter">
      <optgroup label="Please make a selection">
        <option value="dateAsc">Date Ascending</option>
        <option value="dateDec">Date Descending</option>
      </optgroup>
    </select>
  </div>

  <div class="sales-output">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Price</th>
          <th>Salesperson</th>
          <th>Salesperson Commission</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in sortedSales" :key="sale.id">
          <td>{{ getProductById(sale.product_id).name }}</td>
          <td>{{ getCustomerById(sale.customer_id).name }}</td>
          <td>{{ sale.sales_date }}</td>
          <td>{{ getProductById(sale.product_id).sale_price }}</td>
          <td>{{ getSalespersonById(sale.salesperson_id).name }}</td>
          <td>{{ getSalespersonById(sale.salesperson_id).commission_percentage }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex-spacer"></div>
</template>

<style scoped>
.sales-output {
  width: 95%;
  padding: 2%;
  border-radius: 0.5rem;
}

.options {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: nowrap;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';
import connection from '../server/connection';

const sales = ref([]);
const products = ref([]);
const customers = ref([]);
const salespersons = ref([]);
const selectedFilter = ref('dateAsc');
const sortedSales = ref([]);

// Fetch all sales records
const fetchSales = async () => {
  try {
    const salesResponse = await connection.getAllSales();
    const productsResponse = await connection.getAllProducts();
    const customersResponse = await connection.getAllCustomers();
    const salespersonsResponse = await connection.getAllSalespeople();

    sales.value = salesResponse.data;
    products.value = productsResponse.data;
    customers.value = customersResponse.data;
    salespersons.value = salespersonsResponse.data;

    sortSales(selectedFilter.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call fetchSales when the component is mounted
onMounted(fetchSales);

// Watch for changes in the selected filter
watch(selectedFilter, (newVal) => {
  sortSales(newVal);
});

// Function to sort the sales data based on the selected filter
const sortSales = (filter) => {
  if (filter === 'dateAsc') {
    sortedSales.value = [...sales.value].sort((a, b) => new Date(a.sales_date) - new Date(b.sales_date));
  } else if (filter === 'dateDec') {
    sortedSales.value = [...sales.value].sort((a, b) => new Date(b.sales_date) - new Date(a.sales_date));
  }
};

// Helper functions to get product, customer, and salesperson by ID
const getProductById = (productId) => {
  return products.value.find((product) => product.id === productId);
};

const getCustomerById = (customerId) => {
  console.log(customers)
  return customers.value.find((customer) => customer.id === customerId);
};

const getSalespersonById = (salespersonId) => {
  return salespersons.value.find((salesperson) => salesperson.id === salespersonId);
};
</script>