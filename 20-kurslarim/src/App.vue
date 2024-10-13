<template>
  <div v-if="loading" class="text-center m-5">
    <v-progress-circular color="primary" indeterminate />
  </div>
  <div v-else>
    <HeaderComponents />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderComponents from './components/HeaderComponents.vue';
import { firstLoad } from './composables/auth'

const { loading } = firstLoad();
</script>

<style scoped></style>
