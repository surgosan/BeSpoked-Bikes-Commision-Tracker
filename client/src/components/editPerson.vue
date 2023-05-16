<template>
    <main>  
        <div class="hBox">
            <div class="vBox">      
                <div class="singleInput">
                    <label for="fName">First Name: </label>
                    <input type="text" id="fName" v-model="fName"/>
                </div>

                <div class="singleInput">
                    <label for="lName">Last Name: </label>
                    <input type="text" id="lName" v-model="lName"/>
                </div>

                <div class="singleInput">
                    <label for="phone">Phone Number: </label>
                    <input type="text" id="phone" v-model="phoneNumberRef"/>
                </div>
            </div>

            <div class="vBox">
                <div class="singleInput">
                    <label for="address">Address: </label>
                    <input type="number" id="address" v-model="address"/>
                </div>

                <div class="singleInput">
                    <label for="sdate">Start Date: </label>
                    <input type="date" id="sdate" v-model="sDate"/>
                </div>

                <div class="singleInput">
                    <label for="tDate">Termination Date: </label>
                    <input type="date" id="tDate" v-model="tDate"/>
                </div>
            </div>
        </div>
        <p>
            **If the phone number is not found,
            <br> 
            a new person object will be created**
        </p>
        <button @click="noDup">Submit</button>
    </main>
</template>

<style scoped>
    main, .vBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: .5rem;
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
import connection from '../server/connection';
import Api from '@/server/Api';
import axios from 'axios';

const fName = ref("");
const lName = ref("");
const phoneNumberRef = ref("");
const address = ref("");
const sDate = ref("");
const tDate = ref("");

function check() {
    alert(phoneNumberRef.value)
}

async function noDup() {

    const response = await connection.checkSalesPhone({
        phoneNumber: phoneNumberRef.value
    })

    alert(response.data)

    // const response = await connection.post({
    //     msg: "Hello World"
    // })
    
    // const response = await Api().post('/post', {
    //     msg: "OOO ya"
    // })
}

    // Api().post('/post', data)
    //     .then(response => {
    //     state.message = response.data;
    //     })
    //     .catch(error => {
    //     console.log(error);
    //     });

    // const resp = await axios.post('https://localhost:8081/post', {
    //     msg: "Hello World!!!"
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    // console.log(resp);
    
    // console.log(response.data);

</script>