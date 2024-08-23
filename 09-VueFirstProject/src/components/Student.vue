<template>
  <h2>Öğrencilerim</h2>
  <ul>
    <li v-for="student in students" :key="student.id">Adı Soyadı: {{ student.name }} {{ student.lastName }} Yaşı: {{ student.age }} Telefonu: {{ student.phone }}</li>
  </ul>
</template>

<script>
export default {
  name: "student-information",
  props: ['students'],
  data() {
    return {
      
    };
  },
};
</script>

<style scoped></style>
