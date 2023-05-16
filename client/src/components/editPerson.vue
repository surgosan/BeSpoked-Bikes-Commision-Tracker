<template>
    <main>  
        <div class="hBox">
            <div class="vBox">      
                <div class="singleInput">
                    <label for="fName">First Name: </label>
                    <input type="text" id="fName"/>
                </div>

                <div class="singleInput">
                    <label for="lName">Last Name: </label>
                    <input type="text" id="lName"/>
                </div>

                <div class="singleInput">
                    <label for="phone">Phone Number: </label>
                    <input type="text" id="phone"/>
                </div>
            </div>

            <div class="vBox">
                <div class="singleInput">
                    <label for="address">Address: </label>
                    <input type="number" id="address"/>
                </div>

                <div class="singleInput">
                    <label for="sdate">Start Date: </label>
                    <input type="date" id="sdate"/>
                </div>

                <div class="singleInput">
                    <label for="tDate">Termination Date: </label>
                    <input type="date" id="tDate"/>
                </div>
            </div>
        </div>
        <p>
            **If the phone number is not found,
            <br> 
            a new person object will be created**
        </p>
        <button @click="submit">Submit</button>
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
import connection from '../server/connection';
import Api from '@/server/Api';
import axios from 'axios';

async function submit() {
    const response = await connection.post({
        msg: "CHECK CHECK"
    })

    // const response = await Api().post('/post', {
    //     msg: "OOO ya"
    // })

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
    
    console.log(response.data);
}

</script>