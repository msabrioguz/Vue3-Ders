<template>
  <Student name="Mustafa" lastName="Oğuz" age=35 phone="5555555555" isPassed="1"/>
  <Student name="Ali" lastName="Veli" age=25 phone="5555555555" isPassed="0"/>
  <Student name="Ahmet" lastName="Kalamış" age=28 phone="5555555555" isPassed="1"/>
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
    };
  },
};
</script>

<style scoped></style>
