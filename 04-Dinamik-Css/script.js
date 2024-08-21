const app = Vue.createApp({
  data() {
    return {
      firstBox: false,
      secondBox: false,
      thirdBox: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    chooseBox(id) {
      if(id === "1") {
        this.firstBox = !this.firstBox
      } else if(id === "2") {
        this.secondBox = !this.secondBox
      } else if(id === "3") {
        this.thirdBox = !this.thirdBox
      }
    },
  },
});

app.mount("#frontEnd");
