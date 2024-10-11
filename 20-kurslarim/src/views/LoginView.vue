<template>
  <div class="registerContainer">
    <Form :validation-schema="formSchema">
      <h1>Eğitmen Girişi</h1>
      <div class="form-group">
        <Field name="email" v-slot="{ field, errors, errorMessage }">
          <input
            type="email"
            class="form-control"
            placeholder="Lütfen Mailinizi Giriniz"
            v-bind="field"
            :class="{'is-invalid':errors.length !== 0}"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="form-group">
        <Field name="password" v-slot="{ field, errors, errorMessage }">
          <input
            type="password"
            class="form-control"
            placeholder="Lütfen Şifrenizi Giriniz"
            v-bind="field"
            :class="{'is-invalid':errors.length !== 0}"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <button class="btn btn-block mb-3">Giriş Yap</button>
      <div class="formChange">
        <router-link to="/register">Kaydol</router-link>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

const formSchema = yup.object({
    email: yup.string().required('Email adresi zorunludur.').email('Lütfen geçerli bir email adresi giriniz.'),
    password: yup.string().required('Şifre alanı zorunludur.')
});
</script>

<style></style>
