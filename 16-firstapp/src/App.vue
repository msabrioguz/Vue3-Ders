<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <button @click="activeComp = UsersList" class="btn btn-primary mr-3">Kullanıcılar</button>
      <button @click="activeComp = AddUser" class="btn btn-secondary">Yeni Kullanıcı Ekle</button>
      <component :is="activeComp"></component>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/Fixed/HeaderComponent.vue';
import FooterComponent from './components/Fixed/FooterComponent.vue';
import { shallowRef } from 'vue';
import UsersList from './components/User/UsersList.vue';
import AddUser from './components/User/AddUser.vue';

const activeComp = shallowRef(UsersList);

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
