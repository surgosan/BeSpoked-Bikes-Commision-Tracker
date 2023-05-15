<template>
    <main>
        <div class="infoRow">
            <p>Id: 1</p>
            <p>First Name: John</p>
            <p>Last Name: Appleseed</p>
        </div>
        <div class="infoRow">
            <p>Phone Number: 706-934-2353</p>
            <p>Adress: The White House</p>
        </div>

            <p>Start Date: 2020/12/12</p>

    </main>
</template>

<style scoped>

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .infoRow {
        padding: .25em;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
</style>