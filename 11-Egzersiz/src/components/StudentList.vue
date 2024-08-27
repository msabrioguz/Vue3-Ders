<template>
  <div v-for="student in students" :key="student.id" @click="selectStudentToForm">
    <b>Öğrenci Adı:</b> {{ student.name }} - <b>Not:</b> {{ student.score }}
  </div>
</template>

<script>
export default {
  name: 'StudentsList',
  components: {},
  emits: ['studentClicked'],
  data() {
    return {
    }
  },
  props: ['students'],
  methods: {
    selectStudentToForm(student) {
      this.$emit('studentClicked', student)
    }
  }
}
</script>

<style></style>
