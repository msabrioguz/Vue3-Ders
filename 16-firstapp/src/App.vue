<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <button @click="activeComp = StudentOne">Öğrenci 1</button>
      <button @click="activeComp = StudentTwo">Öğrenci 2</button>
      <!-- <StudentOne v-if="activeComp === StudentOne" />
      <StudentTwo v-if="activeComp === StudentTwo" /> -->
      <component :is="activeComp"></component>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from '@/components/Fixed/FooterComponent.vue';
import StudentOne from '@/components/StudentsMath/StudentOne.vue';
import StudentTwo from '@/components/StudentsMath/StudentTwo.vue';
import { ref, shallowRef } from 'vue';

const activeComp = shallowRef(StudentOne);


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
