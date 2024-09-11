<template>
  <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
      <SingleTask :task="task" @onDeleteTask="handleDeleteTask" @onToggleComplete="handleToggleComplete"/>
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
  },
  methods: {
    handleDeleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    handleToggleComplete(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.complete = !task.complete;
    }
  }
};
</script>

<style></style>
