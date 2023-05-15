<template>
    <main>
        <div class="infoRow">
            <p>Id: 1</p>
            <p>Name: Chair</p>
            <p>Manufacturer: IKEA</p>
        </div>
        <div class="infoRow">
            <p>Style: White</p>
            <p>Quantity: 40</p>
        </div>
        <div class="infoRow">
            <p>Purchase Price: $40.99</p>
            <p>Purchase Price: $50.99</p>
        </div>
            <p>Comission: 5%</p>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .infoRow {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
</style>