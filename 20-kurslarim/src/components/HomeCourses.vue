<template>
    <div class="row g-4 mb-4">
      <div class="col-md-4" v-for="course in courseStore.getHomeCourses" :key="course.id">
        <div class="card">
          <img :src="course.img" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ course.title }}</h5>
            <p class="card-text">
              {{ course.summary }}
            </p>
            <router-link :to="{name:'course', params:{id: course.id}}" class="btn btn-primary">Kursu İncele</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useCourseStore } from '@/stores/courses';

const courseStore = useCourseStore();
</script>

<style></style>
