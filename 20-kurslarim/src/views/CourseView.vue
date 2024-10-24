<template>
  <div class="container courseTop">
    <div v-if="loading" class="text-center m-5">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <div class="courseDiv" v-else>
      <div class="courseCategory">
        {{ course.category }}
      </div>
      <div class="courseImg" :style="{ backgroundImage: `url(${course.img})` }"></div>
      <div class="courseContent">
        <div>
          Eğitmen: <b>{{ course.owner.firstname }} {{ course.owner.lastname }}</b>
        </div>
        <hr />
        <h1>{{ course.title }}</h1>
        <div v-html="course.description"></div>
        <div class="courseRating">
          Kurs Puan: <b>{{ course.rating }}/5</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCourseStore } from '@/stores/courses';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const courseStore = useCourseStore();
const course = ref({});
const loading = ref(true);

courseStore
  .getCourseById(route.params.id)
  .then((response) => {
    course.value = response;
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    loading.value = false;
  });
</script>

<style></style>
