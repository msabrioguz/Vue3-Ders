<template>
  <Form :validation-schema="validationSchema">
    <div class="mb-3">
      <label class="form-label">Ad</label>
      <Field
        name="name"
        class="form-control"
        placeholder="Adınızı giriniz..."
      />
      <ErrorMessage name="name" as="div" v-slot="{ message }">
        <div class="alert alert-danger mt-3">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <Field
        name="email"
        class="form-control"
        placeholder="E-Posta Adresinizi giriniz..."
      />
      <ErrorMessage name="email" as="div" v-slot="{ message }">
        <div class="alert alert-danger mt-3">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>
    <button class="btn btn-primary">Kaydet</button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const validationSchema = toTypedSchema(
    zod.object({
        name: zod.string({
            required_error: 'Lütfen isminizi giriniz.',
            invalid_type_error: 'Veri tipi string olabilir.'
        })
        .min(3, { message: 'Minimum 3 karakterli olmalıdır.'})
        .max(255, { message: 'Maximum 255 karakterli olabilir.'}),
        email: zod.string({
            required_error: 'Lütfen e-posta adresinizi giriniz.',
            invalid_type_error: 'Veri tipi string olabilir.'
        })
        .email({ message: 'Lütfen geçerli bir e-posta adresi giriniz.'})
    }),
);
</script>

<style></style>
