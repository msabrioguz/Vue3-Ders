<template>
  <div v-if="loading">
    <app-loading />
  </div>

  <form @submit="handleSubmit" class="mt-3" v-if="!loading">
    <div class="mb-3">
      <label for="name" class="form-label">Ad</label>
      <input type="text" class="form-control" id="name" v-model="user.name" />
    </div>
    <div class="mb-3">
      <label for="lastname" class="form-label">Soyad</label>
      <input type="text" class="form-control" id="lastname" v-model="user.lastname" />
    </div>
    <button type="submit" class="btn btn-primary">Kaydet</button>
  </form>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

const user = reactive({ name: '', lastname: '' });
const loading = ref(false);
const uri = ref('http://localhost:3000/users');

const handleSubmit = () => {
  //   user.id = Math.floor(Math.random() * 101).toString();
  try {
    loading.value = true;
    axios({
      method: 'POST',
      url: uri.value,
      data: user
    })
      .then((data) => {
        console.log(data);
        console.log('Veri eklendi.');
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loading.value = false;
        console.log('Finally');
      });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
