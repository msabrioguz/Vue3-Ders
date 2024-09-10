<template>
  <div class="task">
    <div class="actions">
      <h3 @click="toggleDetails">{{ task.title }}</h3>
      <div>
        <span class="material-symbols-outlined"> delete </span>
        <span class="material-symbols-outlined"> edit </span>
        <span class="material-symbols-outlined"> check </span>
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
  data() {
    return {
      showDetails: false
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
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
</style>
