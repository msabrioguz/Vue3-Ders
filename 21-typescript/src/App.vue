<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

interface Todo  {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const todos = reactive<Todo[]>([]);

onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            return response.json();
        })
        .then((value: Todo[]) => {
            todos.push(...value);
        });
});
</script>

<style scoped>

</style>
