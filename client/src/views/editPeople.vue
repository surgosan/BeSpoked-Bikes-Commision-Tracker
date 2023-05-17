<script setup>
import InfoPerson from '../components/infoPerson.vue';
import editPerson from '../components/editPerson.vue';
import tablePeople from '@/components/tablePeople.vue';
</script>

<template>
    <h1>Sales People</h1>
    <RouterLink class="link" to="/">Home</RouterLink>
    <main>
        <div class="output">
            <h2 class="title">Sales People List</h2>
            <tablePeople class="table"/>
        </div>

        <div class="sideBar">
            <div class="commissionReport">
                <h2 class="title">Quarterly Commission Report</h2>
                
                <div class="comissionOutput">
                    <h3>Choose a sales person</h3>
                </div>
            </div>

            <div class="edit">
                <h2 class="title">Info/Edit</h2>

                <div class="info">
                    <InfoPerson/>
                    <hr>
                    <editPerson/>
                </div>
            </div>
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
        flex-direction: column;
        background-color: var(--background2);
        border: solid 2px white;
        width: 70%;
        height: 100%;
        gap: 1rem;
    }

    .table {
        width: 90%;
        flex-grow: 1;
    }

    .title {
        text-decoration: solid underline var(--theme-color);
    }

    .sideBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: var(--background2);
        border: solid 2px white;
        width: 30%;
        height: 100%;
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

    .commissionReport {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: .5rem;
        background-color: var(--background3);
        border: solid 2px var(--background4);
        margin: 2.5%;
        width: 95%;
        height: 30%;
        text-align: center;
    }

    .comissionOutput{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .edit {
        flex-grow: 1;
        width: 95%;
        text-align: center;
    }
</style>