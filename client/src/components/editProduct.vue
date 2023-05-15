<template>
    <main>
        <div class="hBox">
            <div class="vBox">      
                <div class="singleInput">
                    <label for="name">Name: </label>
                    <input type="text" id="name"/>
                </div>

                <div class="singleInput">
                    <label for="style">Style: </label>
                    <input type="text" id="style"/>
                </div>

                <div class="singleInput">
                    <label for="purchasePrice">Purchase Price: </label>
                    <input type="text" id="purchasePrice"/>
                </div>
            </div>

            <div class="vBox">
                <div class="singleInput">
                    <label for="manufacturer">Manufacturer: </label>
                    <input type="number" id="manufacturer"/>
                </div>

                <div class="singleInput">
                    <label for="quantity">Quantity: </label>
                    <input type="number" id="quantity"/>
                </div>

                <div class="singleInput">
                    <label for="salePrice">Sale Price: </label>
                    <input type="text" id="salePrice"/>
                </div>

            </div>
        </div>

        <div class="singleInput">
            <label for="comissionPercentage">Comission Percentage: </label>
            <input type="number" id="comissionPercentage"/>
        </div>

        <p>
            **If the phone number is not found,
            <br> 
            a new person object will be created**
        </p>
        <button>Submit</button>
    </main>
</template>

<style scoped>
    main, .vBox {
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