<template>
  <h1>Öğrenci Detay</h1>
  <!-- <h3>Öğrenci Id: {{ $route.params.id }}</h3> -->
  <!-- <h3>Öğrenci Id: {{ id }}</h3> -->
  <div v-if="student">
    <h3>Öğrenci Id: {{ student.id }}</h3>
    <h4>Öğrenci Adı: {{ student.username }}</h4>
  </div>
  <div v-else>
    <h2>Öğrenci bilgisi yükleniyor...</h2>
  </div>
</template>
<script>
export default {
  name: 'StudentDetail',
  components: {},
  //   data() {
  //     return {
  //       id: this.$route.params.id
  //     }
  //   }
  data() {
    return {
      student: null
    }
  },
  props: ['id'],
  mounted() {
    fetch('http://localhost:5000/getDataList/'+this.id)
      .then((res) => res.json())
      .then((dataStudent) => {
        this.student = dataStudent
      })
      .catch((err) => console.log(err.message))
  }
}
</script>
<style></style>
