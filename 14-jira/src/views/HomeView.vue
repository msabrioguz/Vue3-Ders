<template>
  <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
      <SingleTask :task="task"/>
    </div>
  </div>
</template>

<script>
import SingleTask from '@/components/SingleTask.vue';

export default {
  name: 'HomeView',
  components: {
    SingleTask,
  },
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    fetch('http://localhost:3000/tasks')
      .then((res) => res.json())
      .then((data) => {
        this.tasks = data;
      })
      .catch((err) => console.log(err.message));
  }
};
</script>

<style></style>
