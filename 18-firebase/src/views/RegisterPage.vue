<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">{{ register ? 'Kayıt Formu' : 'Kullanıcı Girişi' }}</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="email" class="form-label">E-Posta</label>
                    <input type="email" class="form-control" id="email" name="email" v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Şifre</label>
                    <input type="password" class="form-control" id="password" name="password" autocomplete="on" v-model="formData.password">
                </div>
                <button type="submit" class="btn btn-primary btn-lg">{{ register ? 'Kaydol' : 'Giriş Yap' }}</button>
            </form>
            <hr />
            <button class="btn btn-outline-primary" @click="register = !register">{{ register ? 'Giriş Yap' :
                'Kaydol' }}</button>
        </div>
    </div>
</template>

<script setup>
import { auth } from '@/db/configs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const register = ref(true);
const formData = reactive({
    email: '',
    password: '',
})
const router = useRouter();

const registerUser = async () => {
    try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        router.push('/');
    } catch (error) {
        console.log(error);
    }

}

const loginUser = async () => {
    try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        router.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

const handleSubmit = async () => {
    // Kayıt olunacaksa
    if (register.value) {
        registerUser();
    }
    // Giriş yapılacaksa
    else {
        loginUser();
    }
}
</script>

<style></style>