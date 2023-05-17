<template>
<div class="main" id="createSale">
    <h1 class="card-title">Create a sale</h1>
        <div class="hBox">
        <div class="singleInput">
            <label for="productId">Product Id: </label>
            <input type="number" id="productId" v-model="productId" />
        </div>

        <div class="singleInput">
            <label for="salesId">Sales Id: </label>
            <input type="number" id="salesId" v-model="salesId" />
        </div>
        </div>

        <div class="hBox">
        <div class="singleInput">
            <label for="cusId">Customer Id: </label>
            <input type="number" id="cusId" v-model="customerId" />
        </div>

        <div class="singleInput">
            <label for="date">Date: </label>
            <input type="date" id="date" v-model="salesDate" />
        </div>
        </div>

        <button @click="createSale">Create</button>
    </div>
</template>

<style scoped>

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.hBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
 }
</style>

<script setup>
    import { ref } from 'vue';
    import connection from '../server/connection';

    const productId = ref(0);
    const salesId = ref(0);
    const customerId = ref(0);
    const salesDate = ref('');

    const createSale = async () => {
    const newSale = {
        product_id: productId.value,
        salesperson_id: salesId.value,
        customer_id: customerId.value,
        sales_date: salesDate.value,
    };

    try {
        const response = await connection.createSale(newSale);
        console.log('Sale created:', response.data);
    } catch (error) {
        console.error(error);
    }
    };
</script>