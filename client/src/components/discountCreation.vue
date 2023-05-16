<template>
    <main class="sales">
        <h1>Discount Creation</h1>
        <div class="hBox">
            <div class="singleInput">
                <label for="productId">Product Id: </label>
                <input type="number" id="productId"/>
            </div>
    
            <div class="singleInput">
                <label for="discount">Discount Percentage: </label>
                <input type="number" id="discount"/>
            </div>
        </div>
        
        <div class="hBox">
            <div class="singleInput">
                <label for="endDate">End Date: </label>
                <input type="date" id="endDate"/>
            </div>
            
            <div class="singleInput">
                <label for="beginDate">Begin Date: </label>
                <input type="date" id="beginDate"/>
            </div>
        </div>

        <button>Submit</button>
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