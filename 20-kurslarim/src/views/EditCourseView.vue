<template>
  <div v-if="loading" class="text-center m-3">
    <v-progress-circular indeterminate color="primary" />
  </div>
  <div v-else>
    <h1>Kurs Ekle</h1>
    <hr />
    <Form :validation-schema="CourseSchema" @submit="handleSubmit" class="mb-4">
      <div class="mb-4">
        <Field name="category" v-slot="{ field, errors, errorMessage }" v-model="course.category">
          <input
            type="text"
            class="form-control"
            placeholder="Lütfen Kategori Giriniz"
            v-bind="field"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="mb-4">
        <Field name="title" v-slot="{ field, errors, errorMessage }" v-model="course.title">
          <input
            type="text"
            class="form-control"
            placeholder="Lütfen Kurs Adı Giriniz"
            v-bind="field"
            autocomplete="on"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="mb-4">
        <Field name="summary" v-slot="{ field, errors, errorMessage }" v-model="course.summary">
          <textarea
            type="text"
            class="form-control"
            placeholder="Lütfen Kurs Özeti Giriniz"
            v-bind="field"
            autocomplete="on"
            :class="{ 'is-invalid': errors.length !== 0 }"
          ></textarea>
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="mb-4">
        <Field name="rating" v-slot="{ field, errors, errorMessage }" v-model="course.rating">
          <select v-bind="field" class="form-select" :class="{ 'is-invalid': errors.length !== 0 }">
            <option value="Kurs Puanı Seçiniz">Kurs Puanı Seçiniz</option>
            <option v-for="rating in ratingArray" :value="rating" :key="rating">
              {{ rating }}
            </option>
          </select>
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="mb-4">
        <Field name="img" v-slot="{ field, errors, errorMessage }" v-model="course.img">
          <input
            type="text"
            class="form-control"
            placeholder="Lütfen Kurs Resmi Giriniz"
            v-bind="field"
            autocomplete="on"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="mb-4">
        <Tiptap @update="updateEditor" />
        <Field name="description" v-slot="{ field, errors, errorMessage }">
          <input
            type="hidden"
            class="form-control"
            v-bind="field"
            autocomplete="on"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <v-btn type="submit" variant="outlined">Kurs Ekle</v-btn>
    </Form>
  </div>
</template>

<script setup>
import CourseSchema from '@/utils/schema';
import { Field, Form } from 'vee-validate';
import Tiptap from '@/components/Tiptap.vue';
import { ref } from 'vue';
import { useCourseStore } from '@/stores/courses';
import { useToast } from 'vue-toast-notification';
import { useRoute } from 'vue-router';

const veditor = ref('');
const ratingArray = [0, 1, 2, 3, 4, 5];
const courseStore = useCourseStore();
const loading = ref(false);
const $toast = useToast();
const route = useRoute();
const course = ref({});

// Kursların Çekilmesi...
courseStore
  .getCourseById(route.params.id)
  .then((response) => {
    course.value = { ...response };
  })
  .catch((error) => {
    $toast.error(error.message);
  });

function handleSubmit(values) {}

function updateEditor(value) {
  veditor.value = value;
}
</script>

<style></style>
