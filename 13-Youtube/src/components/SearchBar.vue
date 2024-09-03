<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="searchText" />
    <button>Ara</button>
  </form>
</template>

<script>
export default {
    emits: ['searchChange'],
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('searchChange', this.searchText)
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
  margin: 20px 0;
}

input {
  width: 85%;
  padding: 8px;
  margin-right: 20px;
  border-radius: 20px;
}

button {
  width: 15%;
  border: none;
  background-color: green;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
