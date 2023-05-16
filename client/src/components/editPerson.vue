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
                    <input type="text" id="address" v-model="address"/>
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

            <div class="singleInput">
                <label for="manager">Manager: </label>
                <input type="text" id="manager" v-model="manager"/>
            </div>

        <p>
            **If the phone number is not found,
            <br> 
            a new person object will be created**
        </p>
        <button @click="createSalesperson">Submit</button>
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

const fName = ref("");
const lName = ref("");
const phoneNumberRef = ref("");
const address = ref("");
const sDate = ref("");
const tDate = ref("");
const manager = ref("");

const checkRequired = () => {
  const refArray = [fName.value, lName.value, phoneNumberRef.value, address.value];
  return refArray.every(value => value.length > 0);
};


// Check if a salesperson exists with a given phone number
async function checkSalespersonPhone() {
  return new Promise((resolve, reject) => {
    try {
      const phoneNumber = phoneNumberRef.value;

      connection.checkSalespersonPhone(phoneNumber)
        .then(response => {
          if (response.data === "exists") {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}


// Get a salesperson by ID
const getSalespersonById = async (salespersonId) => {
  try {
    const response = await connection.getSalespersonById(salespersonId);
    console.log(response.data);
    // Do something with the response, e.g., update the salesperson details in the UI
  } catch (error) {
    console.error(error);
    // Handle the error, e.g., show an error message
  }
};

// Create a new salesperson
const createSalesperson = async () => {
    if (!checkRequired()) {
      alert("Fill in all fields");
      return;
    }

    const exists = await checkSalespersonPhone();

    try {

    if(exists)
    {
        alert("Sales person already exists")
        return;
    }

    const salespersonData = {
        first_name: fName.value,
        last_name: lName.value,
        phone: phoneNumberRef.value,
        address: address.value,
        start_date: sDate.value !== '' ? sDate.value : null,
        termination_date: tDate.value !== '' ? tDate.value : null,
        manager: manager.value !== '' ? manager.value : null
  };

    const response = await connection.registerSalesperson(salespersonData);
    console.log(response.data);
    // Do something with the response, e.g., show a success message
  } catch (error) {
    console.error(error);
    // Handle the error, e.g., show an error message
  }
};
</script>
