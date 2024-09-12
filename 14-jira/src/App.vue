<template>
  <header>
    <div class="wrapper">
      <nav class="mainNav">
        <RouterLink to="/">Yapılacaklar Listesi</RouterLink> |
        <RouterLink to="/task/add">Yeni Görev Ekle</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  background-color: ghostwhite;
}
#app {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}
.wrapper {
  text-align: center;
}
.mainNav {
  margin: 40px 0;
}
.mainNav a {
  text-decoration: none;
  color: grey;
  font-size: 20px;
  font-weight: 600;
  margin: 0 10px;
  padding-bottom: 5px;
  
  
}
.mainNav a.router-link-exact-active {
  border-bottom: 2px solid lawngreen;
}
</style>
