const app = Vue.createApp({
  data() {
    return {
      skills: [],
      newSkill: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    addSkill() {
      this.skills.push(this.newSkill);
      this.newSkill = "";
    },
  },
});

app.mount("#frontEnd");
