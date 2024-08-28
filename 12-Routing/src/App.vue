<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Anasayfa</RouterLink>
        <RouterLink to="/about">Hakkımda</RouterLink>
        <RouterLink to="/students">Öğrencilerim</RouterLink>
      </nav>
      <div>
        <button @click="mainPage()">Anasayfa</button>
        <button @click="previousPage()">Geri Git</button>
        <button @click="nextPage()">Sonraki</button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  },
  methods: {
    mainPage() {
      this.$router.push('/')
    },
    previousPage() {
      this.$router.go(-1)
    },
    nextPage() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
button {
  margin: 0 20px;
  padding: 10px;
  border-radius: 20px;
  border:none;
  cursor: pointer;
}
</style>
