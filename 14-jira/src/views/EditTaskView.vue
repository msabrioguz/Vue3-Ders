<template>
  <form @submit.prevent="handleSubmit">
    <label>Başlık</label>
    <input type="text" v-model="title" required />
    <label>İş Detay</label>
    <textarea required v-model="details"></textarea>
    <button>Ekle</button>
  </form>
</template>
<script>
export default {
  name: 'EditTaskView',
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/tasks/'
    };
  },
  methods: {
    handleSubmit() {
      let task = {
        id: Math.floor(Math.random() * 1000000),
        title: this.title,
        details: this.details,
        complete: false
      };

      fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err.message));
    }
  },
  mounted() {
    fetch(this.uri + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => console.log(err.message));
  }
};
</script>
<style scoped>
form {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}
input {
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  font-size: 16px;
}
textarea {
  width: 100%;
  border: 1px solid gray;
  border-radius: 20px;
  outline: none;
  height: 100px;
  padding: 10px;
  font-size: 16px;
}
label {
  margin: 20px 0 10px 0;
  display: block;
  color: grey;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}
button {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: lawngreen;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
}
</style>
