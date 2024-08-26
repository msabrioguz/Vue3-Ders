<template>
  <h2>Öğrencilerim</h2>
  <Student v-for="student in students" :key="student.id" v-bind:data="student" @passedChangeEvent="changePassed"/>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      students: [
        {
          id: 1,
          name: "Mustafa",
          lastName: "Oguz",
          age: 25,
          phone: "5555555555",
          isPassed: true,
        },
        {
          id: 2,
          name: "Ali",
          lastName: "Veli",
          age: 30,
          phone: "5555555555",
          isPassed: false,
        },
        {
          id: 3,
          name: "Veli",
          lastName: "Ali",
          age: 35,
          phone: "5555555555",
          isPassed: false,
        },
      ],
    };
  },
  methods: {
    changePassed(id) {
      this.students = this.students.map((student) => {
        if (student.id === id) {
          student.isPassed = !student.isPassed;
        }
        return student;
      });
      // const student = this.students.find((student) => student.id === id);
      // student.isPassed = !student.isPassed;
    },
  },
};
</script>

<style scoped></style>
