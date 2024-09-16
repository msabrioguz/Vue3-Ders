<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <PersonComponent
        :name="data.name"
        :lastname="data.lastName"
        :age="data.age"
        @onUpdateLastName="handleUpdateLastName"
      />
      <button @click="updateName">İsminizi Güncelleyin.</button>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from '@/components/Fixed/FooterComponent.vue';
import PersonComponent from '@/components/UserInformation/PersonComponent.vue';
import { reactive } from 'vue';

const data = reactive({
  name: 'Mustafa',
  lastName: 'Oğuz',
  age: 35
});

const updateName = () => {
  data.name = 'Ali';
};

const handleUpdateLastName = (lastName) => {
  data.lastName = lastName;
};
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
