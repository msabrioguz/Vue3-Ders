<template>
  <div v-if="loading" class="text-center m-3">
    <v-progress-circular indeterminate color="primary" />
  </div>
  <div v-else class="myTable">
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
          <td>
            <v-btn variant="outlined" color="red" size="small" @click="removeCourse(course.id)"
              >Sil</v-btn
            >
          </td>
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
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toast-notification';

const route = useRoute();

const courseStore = useCourseStore();
const btnLoad = ref(false);
const loading = ref(false);
const $toast = useToast();

if (!courseStore.adminCourses || route.query.reload) {
  loading.value = true;
  courseStore.adminGetCourses(3).finally(() => {
    loading.value = false;
  });
}

const loremMore = () => {
  btnLoad.value = true;
  courseStore.adminGetMoreCourses(3).finally(() => {
    btnLoad.value = false;
  });
};

const removeCourse = (courseID) => {
  loading.value = true;
  courseStore
    .removeById(courseID)
    .then(() => {
      $toast.success('Kursunuz silinmiştir.');
    })
    .catch((error) => {
      console.log(error.message);
      $toast.error(error.message);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style></style>
