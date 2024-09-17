<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <!-- <PersonComponent
        :name="data.name"
        :lastname="data.lastName"
        :age="data.age"
        @onUpdateLastName="handleUpdateLastName"
      />
      <button @click="updateName">İsminizi Güncelleyin.</button> -->
      <StudentsComponents />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from '@/components/Fixed/FooterComponent.vue';
import StudentsComponents from '@/components/Student/StudentsComponents.vue';
// import PersonComponent from '@/components/UserInformation/PersonComponent.vue';
import { reactive, provide } from 'vue';

const students = reactive([
  {
    id: 1,
    name: 'Mustafa',
    score: 32
  },
  {
    id: 2,
    name: 'Vedat',
    score: 80
  },
  {
    id: 3,
    name: 'Ayşe',
    score: 75
  },
  {
    id: 4,
    name: 'Polat',
    score: 65
  }
]);

const updateStudent = () => {
  students[0].score = 99;
};

provide('students', {students, updateStudent});
// const updateName = () => {
//   data.name = 'Ali';
// };

// const handleUpdateLastName = (lastName) => {
//   data.lastName = lastName;
// };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  min-height: 83vh;
  padding: 20px;
}
button {
  padding: 10px;
  border: none;
  border-radius: 30px;
  background-color: green;
  color: white;
  margin: 20px;
}
</style>
