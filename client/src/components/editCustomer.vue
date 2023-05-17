<template>
    <main>
      <div class="hBox">
        <div class="vBox">
          <div class="singleInput">
            <label for="fName">First Name: </label>
            <input type="text" id="fName" v-model="fName" />
          </div>
  
          <div class="singleInput">
            <label for="lName">Last Name: </label>
            <input type="text" id="lName" v-model="lName" />
          </div>
        </div>
  
        <div class="vBox">
          <div class="singleInput">
            <label for="phone">Phone Number: </label>
            <input type="text" id="phone" v-model="phoneNumber" />
          </div>
  
          <div class="singleInput">
            <label for="address">Address: </label>
            <input type="text" id="address" v-model="address" />
          </div>
        </div>
      </div>
  
      <div class="singleInput">
        <label for="sdate">Start Date: </label>
        <input type="date" id="sdate" v-model="sDate" />
      </div>
  
      <p>**If the phone number is not found, a new customer will be created**</p>
      <button @click="createCustomer">Submit</button>
    </main>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import connection from '../server/connection';
    
    const fName = ref("");
    const lName = ref("");
    const phoneNumber = ref("");
    const address = ref("");
    const sDate = ref("");
    
    const checkRequired = () => {
        const refArray = [fName.value, lName.value, phoneNumber.value, address.value];
        return refArray.every(value => value.length > 0);
    };
    
    const checkCustomerPhone = async () => {
        try {
        const phone = phoneNumber.value;
        const response = await connection.checkCustomerPhone(phone);
        return response.data;
        } catch (error) {
        console.error(error);
        // Handle the error, e.g., show an error message
        }
    };
    
    const createCustomer = async () => {
        if (!checkRequired()) {
        alert("Fill in all fields");
        return;
        }
    
        const exists = await checkCustomerPhone();
    
        try {
        const customerData = {
            first_name: fName.value,
            last_name: lName.value,
            phone: phoneNumber.value,
            address: address.value,
            start_date: sDate.value !== '' ? sDate.value : null,
        };
    
        if (exists) {
            alert("Customer already exists");
            return;
        }
    
        const response = await connection.createCustomer(customerData);
        console.log(response.data);
        // Do something with the response, e.g., show a success message
        } catch (error) {
        console.error(error);
        // Handle the error, e.g., show an error message
        }
    };
  </script>
  
  <style scoped>
  main,
  .vBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  
  input {
    width: 85%;
  }
  
  .hBox {
    display: flex;
  }
  </style>
  