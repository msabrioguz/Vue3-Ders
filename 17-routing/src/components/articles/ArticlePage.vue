<template>
  <router-link to="/articles/19" class="btn btn-outline-secondary">19 Numaralı Sayfa</router-link>
  <div class="row bg-dark text-white rounded p-4 mb-4">
    <div class="col-md-6">
      <h1 class="fst-italic display-4">Lorem</h1>
      <p class="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus unde ab
        iure officiis reiciendis sed possimus aliquid dignissimos voluptatibus recusandae vero
        inventore iusto numquam, neque consequuntur eveniet suscipit minima!
      </p>
    </div>
  </div>
  <div class="row" v-if="article">
    <div class="col-md-8">
      <h3 class="fst-italic border-bottom pb-4 mb-4">{{ article.title }}</h3>
      <div>
        <p>
          {{ article.date }} <strong>{{ article.author }}</strong>
        </p>
        <p>
          {{ article.summary }}
        </p>
        <p>
          {{ article.content }}
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="bg-light p-4 rounded">
        <h4 class="fst-italic">Lorem</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla sit in expedita
          culpa minima natus vero, doloribus consequatur distinctio delectus a cupiditate enim aut
          sint itaque commodi incidunt error?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();

const article = ref({});

const loadArticle = (articleId) => {
  axios
    .get(`http://localhost:3000/articles/${articleId}`)
    .then((response) => {
      article.value = response.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

onMounted(() => {
  loadArticle(route.params.articleId);
});

// watch(
//   () => route.params.articleId,
//   (articleId) => {
//     loadArticle(articleId);
//   }
// );

onBeforeRouteUpdate(async (to) => {
  loadArticle(to.params.articleId);
});
</script>

<style></style>
