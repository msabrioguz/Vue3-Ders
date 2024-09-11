<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ task.title }}</h3>
      <div>
        <span class="material-symbols-outlined delete" @click="deleteTask"> delete </span>
        <span class="material-symbols-outlined edit"> edit </span>
        <span
          class="material-symbols-outlined done"
          @click="toggleComplete"
          :class="{ active: task.complete }"
        >
          done
        </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['task'],
  emits: ['onDeleteTask', 'onToggleComplete'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/tasks/'
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    deleteTask() {
      fetch(this.uri + this.task.id, { method: 'DELETE' })
        .then(() => this.$emit('onDeleteTask', this.task.id))
        .catch((err) => console.log(err.message));
    },
    toggleComplete() {
      fetch(this.uri + this.task.id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.task.complete })
      })
        .then(() => {
          this.$emit('onToggleComplete', this.task.id);
        })
        .catch((err) => console.log(err.message));
    }
  }
};
</script>
<style scoped>
.task {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 30px 0;
  background-color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border-left: 8px solid palevioletred;
}
h3 {
  cursor: pointer;
}
.details {
  padding: 20px 0;
}
.actions {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined {
  font-size: 25px;
  cursor: pointer;
  margin-left: 10px;
}
.delete:hover {
  color: crimson;
}

.done:hover {
  color: green;
}

.complete {
  border-left: 8px solid green;
}

.active {
  color: green;
}
</style>
