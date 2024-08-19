const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    arttir(number) {
      this.counter = this.counter + number;
    },
    azalt(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#frontEnd");
