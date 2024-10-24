<template>
    <Carousel :items-to-show="1" :wrap-around="true" class="carouselTop mb-4">
      <Slide v-for="course in courseStore.getHomeSlides" :key="course.id">
        <div class="sliderMessage" :style="{ background: `url(${course.img})` }">
          <div class="slideContent">
            {{ course.title }}
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useCourseStore } from '@/stores/courses';

const courseStore = useCourseStore();
</script>

<style></style>
