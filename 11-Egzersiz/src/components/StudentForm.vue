<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="İsminiz" v-model="enteredName"/>
      <input type="number" placeholder="Puanınız" v-model="enteredScore"/>
      <button>Güncelle</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'StudentForm',
  components: {},
  emits: ['updateData'],
  data() {
    return {
      enteredName: '',
      enteredScore: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit('updateData', this.enteredName, this.enteredScore);
    }
  }
}
</script>

<style></style>
