<script setup>
  import discountCreation from '@/components/discountCreation.vue';
  import sales from '@/components/sales.vue';
  import salesNew from '@/components/salesNew.vue';
</script>

<template>
  <main>
    <div class="home-card" id="business">
      <discountCreation/>
    </div>

    <div class="home-card" id="createSale">
      <salesNew/>
    </div>

    <div class="home-card" id="sales">
      <sales/>
    </div>

    <div class="home-card" id="view-routes">
      <RouterLink class="link" to="/editProduct">Products</RouterLink>
      <RouterLink class="link" to="/editPeople">Sales People</RouterLink>
      <RouterLink class="link" to="/customers">Customer List</RouterLink>
    </div>
  </main>
</template>

<style scoped>
  main {
    padding-left: 2%;
    padding-bottom: 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
  }

  .home-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(215deg, var(--background2), 80%, var(--theme-color));
    border-radius: 1rem;
  }

  #view-routes {
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: transparent;
 }

 .link {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 90%;
  height: 45%;
  border: solid 2px var(--background4);
  border-radius: .5rem;
  background: linear-gradient(90deg, var(--background2), 75%, var(--theme-color));
  transition: .4s; 
 }

 .link:hover {
  scale: 1.01;
 }
 .card-title {
  text-decoration: solid underline var(--heading);
 }

 .hBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
 }

 .singleInput {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
 }

 .sales-output{
  display: none;
  width: 95%;
  padding: 2%;
  background: var(--background4);
  border-radius: .5rem;
  flex-grow: 1;
 }

 .options {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  flex-wrap: nowrap;
 }

</style>