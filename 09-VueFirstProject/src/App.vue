<template>
  <StudentForm @add-student="addStudent"/>

  <div class="mainContent">
    <h2>Öğrencilerim</h2>
    <Student
      v-for="student in students"
      :key="student.id"
      v-bind:data="student"
      @passedChangeEvent="changePassed"
    />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import StudentForm from "./components/StudentForm.vue";

export default {
  name: "App",
  components: {
    Student,
    StudentForm,
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
          email: "bVHJF@example.com",
          isPassed: true,
        },
        {
          id: 2,
          name: "Ali",
          lastName: "Veli",
          age: 30,
          phone: "5555555555",
          email: "bVHJF@example.com",
          isPassed: false,
        },
        {
          id: 3,
          name: "Veli",
          lastName: "Ali",
          age: 35,
          phone: "5555555555",
          email: "bVHJF@example.com",
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
    addStudent(newStudent) {
      newStudent.id = this.students.length + 1;
      this.students.push(newStudent);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
form {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
}
input {
  width: 100%;
  padding: 5px;
  border-radius: 20px;
}
form .formControl {
  margin: 20px 0;
}
form label {
  font-size: 20px;
  font-weight: bold;
}
.mainContent {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
}
button{
  background-color: green;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 20px;
}
ul {
  list-style: none;
}
ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
ul li p{
  font-size: 20px;
  font-weight: bold;
}
.student {
  margin: 20px;
}
</style>
