<template>
  <div>
    Student Lists
    <hr>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} : {{ student.score }}
      </li>
    </ul>
    <button @click="updateStudent">İlk Öğrencinin Puanını Güncelle</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const { students, updateStudent} = inject('students');
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>
