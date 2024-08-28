<template>
  <h1>Öğrenci Detay</h1>
  <!-- <h3>Öğrenci Id: {{ $route.params.id }}</h3> -->
  <h3>Öğrenci Id: {{ id }}</h3>
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
  props: ['id']
}
</script>
<style></style>
