<template>
  <h1>Egzersiz</h1>
  <StudentForm />
  <StudentList :username="student.name" :point="student.score"/>
</template>

<script>
import StudentList from './components/StudentList.vue'
import StudentForm from './components/StudentForm.vue';

export default {
  name: 'App',
  components: {
    StudentList,
    StudentForm
  },
  data() {
    return {
      student:{
        id: 1,
          name: 'Mustafa Oğuz',
          score: 90
      },
      students: [
        {
          id: 1,
          name: 'Mustafa Oğuz',
          score: 90
        },
        {
          id: 2,
          name: 'Ali Veli',
          score: 80
        },
        {
          id: 3,
          name: 'Veli Ali',
          score: 70
        }
      ]
    }
  },
  methods: {
    selectStudent(student) {
      this.id = student.id;
      this.name = student.name;
      this.score = student.score;
    }
  }
}
</script>

<style></style>
