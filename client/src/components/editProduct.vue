<template>
    <main>
      <div class="hBox">
        <div class="vBox">
          <div class="singleInput">
            <label for="iName">Name: </label>
            <input type="text" id="iName" v-model="iName" />
          </div>
  
          <div class="singleInput">
            <label for="manufacturer">Manufacturer: </label>
            <input type="text" id="manufacturer" v-model="manufacturer" />
          </div>
  
          <div class="singleInput">
            <label for="style">Style: </label>
            <input type="text" id="style" v-model="style" />
          </div>
        </div>
  
        <div class="vBox">
          <div class="singleInput">
            <label for="purchase_price">Purchase Price: </label>
            <input type="number" step="0.01" id="purchase_price" v-model="purchase_price" />
          </div>
  
          <div class="singleInput">
            <label for="sale_price">Sale Price: </label>
            <input type="number" step="0.01" id="sale_price" v-model="sale_price" />
          </div>
  
          <div class="singleInput">
            <label for="quantity_on_hand">Quantity on Hand: </label>
            <input type="number" id="quantity_on_hand" v-model="quantity_on_hand" />
          </div>
        </div>
      </div>

    <div class="singleInput">
        <label for="commission_percentage">Commission Percentage: </label>
        <input type="number" step="0.01" id="commission_percentage" v-model="commission_percentage" />
    </div>
  
      <button @click="saveProduct">Save</button>
    </main>
  </template>
  
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
  
  <script setup>
  import { ref } from 'vue';
  import connection from '@/server/connection';
  
  const iName = ref('');
  const manufacturer = ref('');
  const style = ref('');
  const purchase_price = ref(0);
  const sale_price = ref(0);
  const quantity_on_hand = ref(0);
  const commission_percentage = ref(0);
  
  const checkRequired = () => {
    return (
      iName.value.trim() !== '' &&
      purchase_price.value !== undefined &&
      sale_price.value !== undefined &&
      quantity_on_hand.value !== undefined
    );
  };
  
  const checkDuplicateProduct = async () => {
    try {
      const response = await connection.getProductByName(iName.value);
      return response.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  const saveProduct = async () => {
    const newProduct = {
      name: iName.value,
      manufacturer: manufacturer.value,
      style: style.value,
      purchase_price: purchase_price.value,
      sale_price: sale_price.value,
      quantity_on_hand: quantity_on_hand.value,
      commission_percentage: commission_percentage.value
    };
    // Check if required fields are not empty
    if (!checkRequired()) {
      console.error('Please fill in all required fields.');
      return;
    }
    
    // Check if a product with the same name already exists
    if (await checkDuplicateProduct()) {
      console.error('A product with the same name already exists.');
      return;
    }

    try {
      // Make an API call to create the product
      console.log("start")
      const response = await connection.createProduct(newProduct);
      console.log('Product saved:', response.data);
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  