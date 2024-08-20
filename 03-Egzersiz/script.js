const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      message: "",
    };
  },
  watch: {
    counter(value) {
      if (value < 25) {
        this.message = "Değerin altındasınız.";
      } else {
        this.message = "Değerin üstündesiniz.";
      }
    },
  },
  computed: {
    result() {
      if (this.counter < 25) {
        return "Değerin altındasınız.";
      } else if(this.counter == 25) {
        return 25;
      } else{
        return "Değerin üstündesiniz.";
      }
    },
  },
  methods: {
    increment() {
      this.counter = this.counter + 10;
    },
    decrement() {
      this.counter = this.counter - 5;
    },
  },
});

app.mount("#frontEnd");
