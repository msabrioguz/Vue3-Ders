<template>
  <div>
    Student Lists
    <hr>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} : {{ student.score }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(['students']);
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>
