<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yazıyı Güncelle</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="title" class="form-label">Başlık</label>
                    <input v-model="formData.title" type="text" class="form-control" id="title">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">İçerik</label>
                    <textarea v-model="formData.description" type="text" class="form-control" id="description"
                        rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Güncelle</button>
                <hr />
                <button type="submit" class="btn btn-danger btn-lg" @click="deleteNote">Sil</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { db } from '@/db/configs.js';
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();
const route = useRoute();

const formData = reactive({
    title: '',
    description: ''
});

const docRef = doc(db, 'notes', route.params.articleId);
getDoc(docRef).then(snapshot => {
    // console.log(snapshot.data())
    formData.title = snapshot.data().title;
    formData.description = snapshot.data().description;
}).catch(err => { console.log(err) });

const handleSubmit = async () => {
    try {
        const docRef = doc(db, 'notes', route.params.articleId);
        await updateDoc(docRef, { ...formData });
        router.push('/');
    } catch (error) {
        console.log(error);
    }

}

const deleteNote = async () => {
    try {
        const docRef = doc(db, 'notes', route.params.articleId);
        await deleteDoc(docRef);
        router.push('/');
    } catch (error) {
        console.log(error);
    }
}

</script>

<style></style>