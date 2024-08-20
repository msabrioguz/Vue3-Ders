const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullNameComputed() {
      console.log("executed");
      if (this.name === "") return "";
      return this.name + " " + "Oguz";
    },
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
    fullName() {
      console.log("executed");
      if (this.name === "") return "";
      return this.name + " " + "Oguz";
    },
  },
});

app.mount("#frontEnd");
