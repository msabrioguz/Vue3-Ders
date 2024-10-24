<template>
  <div class="container">
    <HomeCarousel />
    <HomeCourses />
  </div>
</template>

<script setup>
import HomeCarousel from '@/components/HomeCarousel.vue';
import HomeCourses from '@/components/HomeCourses.vue';
import { useCourseStore } from '@/stores/courses';

const courseStore = useCourseStore();
if(!courseStore.homeCourses){
    courseStore.getCourses();
}
</script>

<style></style>
