<template>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.start_date }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import connection from '@/server/connection';
  
  const customers = ref([]);
  
  const fetchCustomers = async () => {
    try {
      const response = await connection.getAllCustomers();
      customers.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(fetchCustomers);
  </script>
  
  