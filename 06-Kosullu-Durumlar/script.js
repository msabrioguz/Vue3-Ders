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
    removeSkill(index) {
      this.skills.splice(index, 1);
    },
  },
});

app.mount("#frontEnd");
