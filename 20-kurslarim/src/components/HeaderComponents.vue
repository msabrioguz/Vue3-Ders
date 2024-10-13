<template>
  <header>
    <div class="container headerContainer">
        <div class="brand">
            <router-link to="/">MSOguz</router-link>
        </div>
        <div class="routerDiv">
            <ul class="userAction">
                <li v-if="!userStore.auth">
                    <router-link to="/register">Kayıt Ol</router-link>
                </li>
                <li v-if="!userStore.auth">
                    <router-link to="/login">Giriş Yap</router-link>
                </li>
                <li v-if="userStore.auth">
                    <router-link to="/dashboard">Kullanıcı Sayfası</router-link>
                </li>
                <li v-if="userStore.auth">
                    <a href="#" @click="userStore.logout">Çıkış Yap</a>
                </li>
            </ul>
        </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<style></style>
