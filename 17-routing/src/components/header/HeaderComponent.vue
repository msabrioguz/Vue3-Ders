<template>
  <div class="container">
    <header class="d-flex py-3 border-bottom mb-4">
      <router-link to="/" class="me-auto text-decoration-none text-dark">
        <span class="fs-4">MSOguz</span>
      </router-link>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Anasayfa</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/articles">Yazılarım</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'contact'}">İletişim</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup></script>

<style>
</style>
