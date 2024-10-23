<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <div class="col-md-10 ms-auto px-4 dashboardTop">
        <div>
          <h1>Profil Bilgileri</h1>
          <hr />
          <Form :validation-schema="formSchema" @submit="onSubmit" class="col-md-6 mb-4">
            <div class="mb-4">
              <Field name="firstname" v-slot="{ field, errors, errorMessage }" v-model="firstname">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Lütfen adınızı giriniz."
                  v-bind="field"
                  :class="{ 'is-invalid': errors.length !== 0 }"
                />
                <div class="input-alert" v-if="errors.length !== 0">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
            <div class="mb-4">
              <Field name="lastname" v-slot="{ field, errors, errorMessage }" v-model="lastname">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Lütfen soyadınızı giriniz."
                  v-bind="field"
                  autocomplete="on"
                  :class="{ 'is-invalid': errors.length !== 0 }"
                />
                <div class="input-alert" v-if="errors.length !== 0">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>
            <v-btn type="submit" variant="outlined" :loading="loading">Güncelle</v-btn>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import { Field, Form } from 'vee-validate';
import { updateProfile } from '@/composables/user';
import * as yup from 'yup';

const formSchema = yup.object({
  firstname: yup.string().required('Adınızı girmelisiniz.').min(3, 'Adınız en 3 karakterli olabilir.'),
  lastname: yup.string().required('Soyadınızı girmelisiniz.').min(2, 'Soyadınız en 2 karakterli olabilir.')
});

const { onSubmit, loading, firstname, lastname } = updateProfile();
</script>

<style></style>
