<template>
  <div class="row mt-3">
    <div class="col-md-3 mb-4" v-for="user in data.users" :key="user.id">
      <div class="card">
        <img :src="'https://placebeard.it/300/300?' + user.id" class="card-img-top" />
        <div class="card-body">
          <p class="card-text">{{ user.name }} {{ user.lastname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';

const uri = ref('http://localhost:3000/users');

const data = reactive({
  users: []
});

const getUsers = async () => {
  try {
    const response = await axios.get(uri.value);
    console.log(response);
    data.users = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getUsers();
});
</script>

<style></style>
