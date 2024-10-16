<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <div class="col-md-10 ms-auto px-4 dashboardTop">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
</script>

<style></style>
