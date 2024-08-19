const app = Vue.createApp({
  data() {
    return {
      firstGoal: "Html",
      secondGoal: "Css",
      thirdGoal: "Vue JS",
      website: "https://vuejs.org/",
      htmlSentez: "<h3>Html Sentez</h3>",
    };
  },
  methods: {
    ourGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.33) {
        return this.firstGoal;
      } else if (randomNumber < 0.66) {
        return this.secondGoal;
      } else {
        return this.thirdGoal;
      }
    },
    htmlTag() {
      return "<h1>Html Sentez</h1>";
    },
  },
});

app.mount("#frontEnd");
