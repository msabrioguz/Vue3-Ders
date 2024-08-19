const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    arttir() {
      this.counter++;
    },
    azalt() {
      this.counter = this.counter - 1;
    },
  },
});

app.mount("#frontEnd");
