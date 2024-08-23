<template>
  <Student :students="students" />
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
        },
        {
          id: 2,
          name: "Ali",
          lastName: "Veli",
          age: 30,
          phone: "5555555555",
        },
        {
          id: 3,
          name: "Veli",
          lastName: "Ali",
          age: 35,
          phone: "5555555555",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
