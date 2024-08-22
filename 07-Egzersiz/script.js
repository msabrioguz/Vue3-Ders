const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      showTasks: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
      this.newTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#frontEnd");
