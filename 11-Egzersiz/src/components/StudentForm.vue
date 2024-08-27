<template>
  <form @submit.prevent="submitForm">
    <label>Ad:</label>
    <input type="text"/>
    <label>Not:</label>
    <input type="number">
    <button>Kaydet</button>
  </form>
</template>

<script>
export default {
  name: 'StudentForm',
  components: {},
  data() {
    return {
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style></style>
