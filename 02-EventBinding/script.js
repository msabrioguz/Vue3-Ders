const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value < 0) {
        this.counter = 0;
      }
      if (value > 35) {
        this.counter = 0;
      }
    },
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = this.name + " " + value;
      }
    },
  },
  computed: {
    fullNameComputed() {
      console.log("executed");
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
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
      this.lastName = "";
    },
    fullName1() {
      console.log("executed");
      if (this.name === "") return "";
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#frontEnd");
