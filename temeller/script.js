const app = Vue.createApp({
  data() {
    return {
      firstGoal: "Html",
      secondGoal: "Css",
      thirdGoal: "Vue JS",
      website: "https://vuejs.org/",
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
  },
});

app.mount("#frontEnd");
