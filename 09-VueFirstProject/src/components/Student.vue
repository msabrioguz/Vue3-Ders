<template>
  <div class="student">
    <h2>
      {{ data.name }} {{ data.lastName }}
      {{ data.isPassed ? "(Geçti)" : "(Kaldı)" }}
    </h2>
    <button style="margin-right: 10px" @click="isVisible = !isVisible">
      Bilgilerini {{ isVisible ? "Gizle" : "Göster" }}
    </button>
    <button @click="passChange" :style="{ backgroundColor: data.isPassed ? 'red' : 'green' }">
      Sınıftan {{ data.isPassed ? "Bırak" : "Geçir" }}
    </button>
    <ul v-if="isVisible">
      <li><p>Numarası:</p> {{ data.id }}</li>
      <li><p>Telefon:</p> {{ data.phone }}</li>
      <li><p>Yaş:</p> {{ data.age }}</li>
      <li><p>Sınıfı Geçti mi:</p> {{ data.isPassed ? "Evet" : "Hayır" }}</li>
    </ul>
  </div>
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
