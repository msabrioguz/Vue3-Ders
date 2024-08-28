<template>
  <h1>Öğrenciler Listesi</h1>
  <ul>
    <!-- <li v-for="student in students" :key="student.id"><RouterLink :to="`/students/${student.id}`">{{ student.name }}</RouterLink></li> -->
    <li v-for="student in students" :key="student.id"><RouterLink :to="{ name: 'student-detail', params: { id: student.id } }">{{ student.name }}</RouterLink></li>
  </ul>
</template>

<script>
export default {
  name: 'StudentsView',
  components: {},
  data() {
    return {
      students: [
        {
          id: 1,
          name: 'Mustafa Oğuz'
        },
        {
          id: 2,
          name: 'Yasin Cihan'
        },
        {
          id: 3,
          name: 'Vedat Fil'
        }
      ]
    }
  }
}
</script>

<style></style>
