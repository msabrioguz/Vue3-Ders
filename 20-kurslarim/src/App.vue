<template>
  <div>
    <HeaderComponents />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderComponents from './components/HeaderComponents.vue';
</script>

<style scoped></style>
