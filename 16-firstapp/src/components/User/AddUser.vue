<template>
  <div v-if="loading">
    <app-loading />
  </div>

  <form @submit.prevent="handleSubmit" class="mt-3" v-if="!loading">
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
import postUser from '@/composables/postUser'; 
import { reactive } from 'vue';
const user = reactive({ name: '', lastname: '' });

const { loading, handleSubmit } = postUser(user);

</script>

<style></style>
