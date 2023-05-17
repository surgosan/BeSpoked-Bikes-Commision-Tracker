<template>
    <div class="main">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Style</th>
            <th>Purchase Price</th>
            <th>Sale Price</th>
            <th>Quantity on Hand</th>
            <th>Commission Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.manufacturer }}</td>
            <td>{{ product.style }}</td>
            <td>{{ product.purchase_price }}</td>
            <td>{{ product.sale_price }}</td>
            <td>{{ product.quantity_on_hand }}</td>
            <td>{{ product.commission_percentage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<style scoped>
  .main {
    text-align: center;
    width: 95%;
  }
</style>
  
  <script setup>
    import { ref, onMounted } from 'vue';
    import connection from '@/server/connection';
    
    const products = ref([]);
    
    const fetchProducts = async () => {
        try {
        const response = await connection.getAllProducts();
        products.value = response.data;
        } catch (error) {
        console.error(error);
        }
    };
    
    onMounted(fetchProducts);
  </script>
  