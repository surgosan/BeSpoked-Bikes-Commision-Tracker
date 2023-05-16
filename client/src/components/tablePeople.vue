<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Start Date</th>
            <th>Termination Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="salesperson in salespeople" :key="salesperson.id">
            <td>{{ salesperson.id }}</td>
            <td>{{ salesperson.first_name }}</td>
            <td>{{ salesperson.last_name }}</td>
            <td>{{ salesperson.phone }}</td>
            <td>{{ salesperson.address }}</td>
            <td>{{ salesperson.start_date }}</td>
            <td>{{ salesperson.termination_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<style scoped>
    
</style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import connection from '@/server/connection';
  
  const salespeople = ref([]);
  
  const getSalespeople = async () => {
    try {
      const response = await connection.getAllSalespeople();
      salespeople.value = response.data;
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message
    }
  };
  
  onMounted(getSalespeople);
  </script>
  