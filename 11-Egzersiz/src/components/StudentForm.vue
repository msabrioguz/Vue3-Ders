<template>
  <form @submit.prevent="submitForm">
    <label>Ad:</label>
    <input type="text" v-model="enteredName"/>
    <label>Not:</label>
    <input type="number" v-model="enteredScore">
    <button>Kaydet</button>
  </form>
</template>

<script>
export default {
  name: 'StudentForm',
  components: {},
  data() {
    return {
        enteredName: '',
        enteredScore: 0
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style></style>
