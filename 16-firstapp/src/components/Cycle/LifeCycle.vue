<template>
  <div>{{ name }}</div>
  <button @click="name = 'Mehmet'">Adınızı Güncelleyin</button>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated
} from 'vue';

const name = ref('Mustafa');

onMounted(() => {
  console.log('onMounted');
});

onBeforeMount(() => {
  console.log('onBeforeMounted');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});
</script>

<style></style>
