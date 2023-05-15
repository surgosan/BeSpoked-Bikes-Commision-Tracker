<template>
  <main>
    <div class="home-card" id="business">
      <h1 class="card-title">BeSpoked Bikes</h1>
    </div>

    <div class="home-card" id="createSale">
      <h1 class="card-title">Create a sale</h1>

      <div class="hBox">
        <div class="singleInput">
          <label for="productId">Product Id: </label>
          <input type="number" id="productId"/>
        </div>

        <div class="singleInput">
          <label for="salesId">Sales Id: </label>
          <input type="number" id="salesId"/>
        </div>
      </div>

      <div class="hBox">
        <div class="singleInput">
          <label for="cusId">Customer Id: </label>
          <input type="number" id="cusId"/>
        </div>

        <div class="singleInput">
          <label for="date">Date: </label>
          <input type="date" id="date"/>
        </div>
      </div>
      
      <button >Create</button>

    </div>

    <div class="home-card" id="sales">
      <h1 class="card-title">Sales</h1>
      
      <div class="options">
        <label for="filter">Filter By: </label>
        <select name="filter">
          <optgroup label="Please make a selection">
            <option value="dateAsc">Date Ascending</option>
            <option value="dateDec">Date Decending</option>
          </optgroup>
        </select>
      </div>

      <div class="sales-output">

      </div>
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