<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <h1>{{ name }}</h1>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FooterComponent from '@/components/Fixed/FooterComponent.vue';

const name = ref('Mustafa Oğuz');
</script>

<style>
h1 {
  color: red;
}
</style>
