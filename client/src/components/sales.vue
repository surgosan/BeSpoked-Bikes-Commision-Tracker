<template>
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
</template>

<style scoped>
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