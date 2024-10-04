<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yeni Yazı Ekle</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="title" class="form-label">Başlık</label>
                    <input v-model="formData.title" type="text" class="form-control" id="title">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">İçerik</label>
                    <textarea v-model="formData.description" type="text" class="form-control" id="description" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Ekle</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { db } from '@/db/configs.js';
import { collection, addDoc } from "firebase/firestore";
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const formData = reactive({
    title: '',
    description: ''
});

const router = useRouter();

const handleSubmit = async () => {
    const notesCollection = collection(db, 'notes');
    await addDoc(notesCollection, {
        ...formData
    })

    formData.title = '';
    formData.description = '';

    router.push('/');
}

</script>

<style></style>