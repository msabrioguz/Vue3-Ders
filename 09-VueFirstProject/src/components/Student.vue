<template>
  <h2>
    {{ data.name }} {{ data.lastName }}
    {{ data.isPassed ? "(Geçti)" : "(Kaldı)" }}
  </h2>
  <button style="margin-right: 10px" @click="isVisible = !isVisible">
    Bilgilerini {{ isVisible ? "Gizle" : "Göster" }}
  </button>
  <button @click="passChange">Sınıftan {{ data.isPassed ? "Bırak" : "Geçir" }}</button>
  <ul v-if="isVisible">
    <li>Telefon: {{ data.phone }}</li>
    <li>Yaş: {{ data.age }}</li>
    <li>Sınıfı Geçti mi: {{ data.isPassed ? "Evet" : "Hayır" }}</li>
  </ul>
</template>

<script>
export default {
  name: "student-information",
  emits: ["passedChangeEvent"],
  props: ["data"],
  data() {
    return {
      isVisible: false,
    };
  },

  methods: {
    passChange() {
      this.$emit("passedChangeEvent", this.data.id);
    },
  },
};
</script>

<style scoped></style>
