<template>
  <div class="myTable">
    <v-table style="background-color: blueviolet; color: white">
      <thead>
        <tr>
          <th class="text-left">Kategori</th>
          <th class="text-left">Eğitmen</th>
          <th class="text-left">Kurs Adı</th>
          <th class="text-left">Kurs Puanı</th>
          <th class="text-left">Sil</th>
          <th class="text-left">Güncelle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courseStore.adminCourses" :key="course.id">
          <td>{{ course.category }}</td>
          <td>{{ course.owner.firstname }} {{ course.owner.lastname }}</td>
          <td>{{ course.title }}</td>
          <td>{{ course.rating }}</td>
          <td><v-btn variant="outlined" color="red" size="small">Sil</v-btn></td>
          <td><v-btn variant="outlined" size="small">Güncelle</v-btn></td>
        </tr>
      </tbody>
    </v-table>
    <div v-if="btnLoad" class="text-center m-3">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-btn v-else variant="outlined" class="mt-3" @click="loremMore()">Daha Fazla Kurs Yükle</v-btn>
  </div>
</template>

<script setup>
import { useCourseStore } from '@/stores/courses';
import { ref } from 'vue';

const courseStore = useCourseStore();
const btnLoad = ref(false);

courseStore.adminGetCourses(3);

const loremMore = () => {
  btnLoad.value = true;
  courseStore.adminGetMoreCourses(3).finally(() => {
    btnLoad.value = false;
  });
};
</script>

<style></style>
