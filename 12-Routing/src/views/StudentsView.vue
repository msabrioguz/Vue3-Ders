<template>
  <h1>Öğrenciler Listesi</h1>
  <ul v-if="students">
    <!-- <li v-for="student in students" :key="student.id"><RouterLink :to="`/students/${student.id}`">{{ student.name }}</RouterLink></li> -->
    <li v-for="student in students" :key="student.id"><RouterLink :to="{ name: 'student-detail', params: { id: student.id } }">{{ student.username }}</RouterLink></li>
  </ul>
  <div v-else>
    <h2>Öğrenci bilgisi yükleniyor...</h2>
  </div>
</template>

<script>
export default {
  name: 'StudentsView',
  components: {},
  data() {
    return {
      students: []
    }
  },
  mounted() {
    fetch('http://localhost:5000/getDataList')
      .then((res) => res.json())
      .then((dataStudent) => {
        this.students = dataStudent;
      })
      .catch((err) => console.log(err.message))
  }
}
</script>

<style></style>
