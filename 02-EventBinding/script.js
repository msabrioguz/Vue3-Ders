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
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    girisYap(event) {
      // event.preventDefault();
      alert("Giriş Yapıldı");
    },
  },
});

app.mount("#frontEnd");
