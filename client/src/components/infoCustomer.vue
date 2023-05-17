<template>
    <main>
      <div class="infoRow">
        <p>Id: {{ customer ? customer.id : 'Loading...' }}</p>
        <p>First Name: {{ customer ? customer.first_name : 'Loading...' }}</p>
        <p>Last Name: {{ customer ? customer.last_name : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Phone Number: {{ customer ? customer.phone : 'Loading...' }}</p>
        <p>Address: {{ customer ? customer.address : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Start Date: {{ customer ? customer.start_date : 'Loading...' }}</p>
      </div>
    </main>
  </template>
  
  <style scoped>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
  
  const customer = ref(null);
  
  const getCustomerData = async (customerId) => {
    try {
      const response = await connection.getCustomerById(customerId);
      customer.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    const customerId = 1;
    getCustomerData(customerId);
  });
  </script>
  