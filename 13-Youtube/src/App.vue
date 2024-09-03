<template>
  <div class="container">
    <h1 class="title">Youtube Uygulaması</h1>
    <SearchBar @search-change="onSearchChange"/>
  </div>
</template>
<script>
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
  },
  methods: {
    onSearchChange(searchText) {
      console.log(searchText);
    }
  }
  
}
</script>
<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 50px auto;
  }

  .title {
    text-align: center;
  }
</style>