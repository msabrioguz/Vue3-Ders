<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Anasayfa</RouterLink>
        <RouterLink to="/about">Hakkımda</RouterLink>
        <RouterLink to="/students">Öğrencilerim</RouterLink>
      </nav>
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
  }
}
</script>

<style>

</style>
