<template>
    <main class="sales">
    <h1>Discount Creation</h1>
    <div class="hBox">
        <div class="singleInput">
        <label for="productId">Product Id:</label>
        <input type="number" id="productId" v-model="productId" />
        </div>

        <div class="singleInput">
        <label for="discount">Discount Percentage:</label>
        <input type="number" id="discount" v-model="discount" />
        </div>
    </div>

    <div class="hBox">
        <div class="singleInput">
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate" v-model="endDate" />
        </div>

        <div class="singleInput">
        <label for="beginDate">Begin Date:</label>
        <input type="date" id="beginDate" v-model="beginDate" />
        </div>
    </div>

    <button @click="saveDiscount">Submit</button>
    </main>
  </template>

<style scoped>
    .sales {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 75%;
    }

    .hBox {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
</style>

<script setup>
    import { ref } from 'vue';
    import connection from '@/server/connection';

    const productId = ref('');
    const discount = ref('');
    const endDate = ref('');
    const beginDate = ref('');

    const saveDiscount = async () => {
    const discountData = {
        product_id: productId.value,
        begin_date: beginDate.value,
        end_date: endDate.value,
        discount_percentage: discount.value,
    };

    try {
        const response = await connection.discountNew(discountData);
        console.log('Discount created:', response.data);

        // Reset input values after successful creation
        productId.value = '';
        discount.value = '';
        endDate.value = '';
        beginDate.value = '';
    } catch (error) {
        console.error(error);
    }
    };
</script>