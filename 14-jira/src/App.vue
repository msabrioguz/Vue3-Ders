<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Yapılacaklar Listesi</RouterLink>
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
</style>
