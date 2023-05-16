<template>
    <main>
      <div class="infoRow">
        <p>Id: {{ salesperson ? salesperson.id : 'Loading...' }}</p>
        <p>First Name: {{ salesperson ? salesperson.first_name : 'Loading...' }}</p>
        <p>Last Name: {{ salesperson ? salesperson.last_name : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Phone Number: {{ salesperson ? salesperson.phone : 'Loading...' }}</p>
        <p>Address: {{ salesperson ? salesperson.address : 'Loading...' }}</p>
      </div>
      <div class="infoRow">
        <p>Start Date: {{ salesperson ? salesperson.start_date : 'Loading...' }}</p>
        <p>Termination Date: {{ salesperson ? salesperson.termination_date : 'Loading...' }}</p>
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
  
  const salesperson = ref(null);
  
  const getSalespersonData = async (salespersonId) => {
    try {
      const response = await connection.getSalespersonById(salespersonId);
      salesperson.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    const salespersonId = 5;
    getSalespersonData(salespersonId);
  });
  </script>
  