<template>
    <div>
        <StudentsList :students="students"/>
    </div>
</template>

<script setup>
import StudentsList from '@/components/Student/StudentsList.vue';
    defineProps(['students']);
</script>

<style>
    
</style>