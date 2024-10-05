<template>
    <div class="container">
        <header class="d-flex py-3 border-bottom mb-5">
            <router-link to="/" class="me-auto text-dark text-decoration-none">
                <span class="fs-3">Mustafa Oğuz</span>
            </router-link>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Yazılarım</router-link>
                </li>
                <li class="nav-item" v-if="!isAuth">
                    <router-link class="nav-link" to="/users/register">Kayıt Ol</router-link>
                </li>
                <li class="nav-item" v-if="isAuth">
                    <a class="nav-link " @click="handleLogout">Çıkış Yap</a>
                </li>
                <li class="nav-item" v-if="isAuth">
                    <router-link class="nav-link" to="/admin/AddArticle">Yazı Ekle</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<script setup>
import { auth } from '@/db/configs';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref } from 'vue';

const isAuth = ref(auth.currentUser);

onAuthStateChanged(auth, user => {
    console.log(user);
    isAuth.value = user;
})


const handleLogout = () => {
    try {
        signOut(auth);
        console.log('Click Logout')
    } catch (error) {
        console.log(error.message);
    }

}

</script>

<style></style>