const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    arttir(number) {
      this.counter = this.counter + number;
    },
    azalt(number) {
      this.counter = this.counter - number;
    },
    setName(event) {
      this.name = event.target.value;
    },
    girisYap(event) {
      // event.preventDefault();
      alert("Giriş Yapıldı");
    },
    clear() {
      this.name = "";
    },
  },
});

app.mount("#frontEnd");
