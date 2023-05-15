<template>
  <h1 id="title">Bespoked Bikes Manager Site</h1>
  <router-view class="view"/>
</template>

<style scopeds>
#title {
  position: relative;
  padding: 30px;
  text-align: center;
  font-weight: bold;
}
#title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 10%;
  width: 100%;
  height: 2px;
  background-color: var(--theme-color);
}

.view {
  width: 100%;
  height: 50px;
  flex-grow: 1;
}
</style>
