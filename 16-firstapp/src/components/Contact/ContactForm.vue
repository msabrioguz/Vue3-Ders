<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <h1>İletişim</h1>
      <hr />
      <div class="mb-3">
        <label for="name" class="form-label">Ad</label>
        <input type="text" class="form-control" id="name" v-model="data.name" />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Soyad</label>
        <input type="text" class="form-control" id="lastName" v-model="data.lastName"/>
      </div>
      <div class="mb-3">
        <h4>Cinsiyet</h4>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="genderF" name="gender" v-model="data.gender" value="female"/>
          <label for="genderF">Kadın</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="genderM" name="gender" v-model="data.gender" value="male"/>
          <label for="genderM">Erkek</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" id="email" v-model="data.email"/>
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">Konu</label>
        <input type="text" class="form-control" id="subject" v-model="data.subject"/>
      </div>
      <div class="mb-3">
        <h4>Hangi Amaçla Yazıyorsunuz?</h4>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="Stream" name="perpose" value="Stream" v-model="data.perpose" />
          <label for="Stream">Canlı Eğitimler</label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="eVideo" name="perpose" value="eVideo" v-model="data.perpose" />
          <label for="eVideo">Video E-Eğitimler</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label"></label>
        <textarea name="message" id="message" class="form-control" rows="3" v-model="data.message"></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary">Gönder</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
    name: '',
    lastName: '',
    gender: 'male',
    email: '',
    subject: '',
    perpose : [],
    message: ''
})

const handleSubmit = () => {
    console.log(data);
}

</script>

<style></style>
