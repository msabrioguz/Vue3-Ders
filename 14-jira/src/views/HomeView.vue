<template>
  <FilterTask :filter="filter" @filterChange="handleFilterChange"/>
  <div v-if="tasks.length">
    <div v-for="task in filteredTasks" :key="task.id">
      <SingleTask :task="task" @onDeleteTask="handleDeleteTask" @onToggleComplete="handleToggleComplete"/>
    </div>
  </div>
</template>

<script>
import SingleTask from '@/components/SingleTask.vue';
import FilterTask from '@/components/FilterTask.vue';

export default {
  name: 'HomeView',
  components: {
    SingleTask,
    FilterTask
  },
  data() {
    return {
      tasks: [],
      uri: 'http://localhost:3000/tasks',
      filter: 'all'
    };
  },
  mounted() {
    fetch(this.uri)
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
    },
    handleFilterChange(filter) {
      this.filter = filter;
    }
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'completed') {
        return this.tasks.filter((task) => task.complete);
      } else if (this.filter === 'continue') {
        return this.tasks.filter((task) => !task.complete);
      } else {
        return this.tasks;
      }
    }
  }
};
</script>

<style></style>
