const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    arttir (){
      this.counter++;
    },
    azalt (){
      this.counter--;
    }
  },
});

app.mount("#frontEnd");
