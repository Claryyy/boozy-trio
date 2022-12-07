<script setup lang="ts">
import CocktailItem from "./CocktailItem.vue";
</script>

<template>
  <div class="container">
    <CocktailItem class="item">
      <template #heading></template>
    </CocktailItem>

    <CocktailItem class="item">
      <template #heading></template>
    </CocktailItem>

    <CocktailItem class="item">
      <template #heading></template>
    </CocktailItem>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .container {
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: space-around;
    padding-top: 0.8rem;
  }

  .card {
    flex: 1;
  }
}

@media (max-width: 1023px) {
  .item {
    padding-bottom: 0.8rem;
  }
}
</style>
