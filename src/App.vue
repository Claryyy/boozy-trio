<script setup lang="ts">
import { RouterView } from "vue-router";
import HomeHeader from "./components/HomeHeader.vue";
</script>

<template>
  <header>
    <div>
      <HomeHeader msg="Boozy trio" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
