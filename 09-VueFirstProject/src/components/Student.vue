<template>
  <h2>Öğrencilerim</h2>
  <h3>{{ name }} {{ lastName }} / {{ childIsPassed === '1' ? 'Geçti' : 'Kaldı' }}</h3>
  <button @click="changeStatus" style="margin-right: 10px;">Durum Değiştir</button>
  <button @click="isVisible = !isVisible">Bilgileri {{ isVisible ? "Gizle" : "Göster" }}</button>
  <ul v-if="isVisible">
    <li>Yaş: {{ age }}</li>
    <li>Telefon: {{ phone }}</li>
  </ul>
</template>

<script>
export default {
  name: "student-information",
  // props: ['name', 'lastName', 'age', 'phone', 'isPassed'],
  props: {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    isPassed: {
      type: String,
      required: true,
      default: '0',
      validator: function (value) {
        return value === '0' || value === '1';
      },
    }
  },
  data() {
    return {
      isVisible: false,
      childIsPassed: this.isPassed
    };
  },
  methods: {
    changeStatus() {
      if (this.childIsPassed === '1') {
        this.childIsPassed = '0';
      } else {
        this.childIsPassed = '1';
      }
    },
  },
};
</script>

<style scoped></style>
