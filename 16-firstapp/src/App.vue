<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <ValidationForm />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/Fixed/HeaderComponent.vue';
import FooterComponent from './components/Fixed/FooterComponent.vue';
import ValidationForm from './components/Contact/ValidationForm.vue';


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  min-height: 83vh;
  padding: 20px;
}
button {
  padding: 10px;
  border: none;
  border-radius: 30px;
  background-color: green;
  color: white;
  margin: 20px;
}
</style>
