<template>
    <main>
      <div class="infoRow">
        <p>Id: {{ product ? product.id : 'Loading...' }}</p>
        <p>Name: {{ product ? product.name : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Manufacturer: {{ product ? product.manufacturer : 'Loading...' }}</p>
        <p>Style: {{ product ? product.style : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Purchase Price: {{ product ? product.purchase_price : 'Loading...' }}</p>
        <p>Sale Price: {{ product ? product.sale_price : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Quantity on Hand: {{ product ? product.quantity_on_hand : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Commission Percentage: {{ product ? product.commission_percentage : 'Loading...' }}</p>
      </div>
    </main>
  </template>
  
  <style scoped>
  main {
    display: flex;
    flex-direction: column;
  }
  
  .infoRow {
    padding: 0.25em;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import connection from '@/server/connection';
  
  const product = ref(null);
  
  const getProductData = async (productId) => {
    try {
      const response = await connection.getProductById(productId);
      product.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    const id = 2; // Replace with the actual product ID
    getProductData(id);
  });
  </script>
  