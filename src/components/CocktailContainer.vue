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
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
