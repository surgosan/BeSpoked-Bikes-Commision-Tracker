<script setup>
    import infoCustomer from '@/components/infoCustomer.vue';
    import editCustomer from '@/components/editCustomer.vue';
</script>

<template>
    <h1>Customers</h1>
    <RouterLink class="link" to="/">Home</RouterLink>
    <main>
        <div class="output">
            <h2>Customer List</h2>
        </div>

        <div class="sideBar">
            <h2 id="sideTitle">Info Controller</h2>
            <infoCustomer/>
            <editCustomer/>
        </div>
    </main>
</template>

<style scoped>
    main {
        width: 98%;
        margin-left: 2%;
        flex-grow: 1;
        display: flex;
        padding: 2%;
    }
    .output {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background2);
        border: solid 2px white;
        width: 70%;
        height: 100%;
    }

    .sideBar {
        text-align: center;
        background-color: var(--background2);
        border: solid 2px white;
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    #sideTitle {
        padding: 2%;
        text-decoration: solid underline var(--text);
    }
    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        width: fit-content;
        height: 2rem;
        padding-left: 1%;
        padding-right: 1%;
        margin-top: 1rem;
        border: solid 2px var(--background4);
        border-radius: .5rem;
        background: linear-gradient(90deg, var(--background2), 75%, var(--theme-color));
        transition: .4s;
    }
    .link:hover {
    scale: 1.05;
    }
</style>