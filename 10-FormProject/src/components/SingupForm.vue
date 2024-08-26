<template>
  <div>
    <h2>Form Projesi</h2>
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" v-model="email" required />
      <label>Şifre:</label>
      <input type="password" v-model="password" required />
      <label>Cinsiyet:</label>
      <select v-model="gender">
        <option value="">Lütfen cinsiyetinizi seçin.</option>
        <option value="female">Kadın</option>
        <option value="male">Erkek</option>
      </select>
      <label>Bildiğiniz Diller;</label>
      <input type="text" v-model="skill" @keyup.alt="addSkill($event)" />
      <div v-for="skillItem in skills" :key="skillItem" class="skillItem" @click="deleteSkill(skillItem)">
        <span>{{ skillItem }}</span>
      </div>
      <div class="terms">
        <input type="checkbox" v-model="term" required />
        <label>Kullanım koşullarını kabul ediyorum.</label>
      </div>
      <div class="btnDiv">
        <button>Kayıt Ol</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SingupForm',
  data() {
    return {
      email: '',
      password: '',
      gender: '',
      term: false,
      skill: '',
      skills: []
    }
  },
  methods: {
    addSkill(event) {
      if (event.key === ',' && this.skill) {
        if (!this.skills.includes(this.skill)) {
          this.skills.push(this.skill)
        }
        this.skill = ''
      }
    },
    deleteSkill(skillItem) {
      this.skills = this.skills.filter(skill => skill !== skillItem)
    },
    handleSubmit(){
      console.log('Email: ', this.email);
      console.log('Password: ', this.password);
      console.log('Gender: ', this.gender);
      console.log('Term: ', this.term);
      console.log('Skills: ', this.skills);
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
}
form {
  max-width: 500px;
  width: 100%;
  margin: 40px auto;
  background: antiquewhite;
  padding: 40px;
  border-radius: 20px;
}
input,
select {
  display: block;
  width: 100%;
  padding: 10px 8px;
  border-radius: 20px;
  border: none;
  outline: none;
}
label {
  margin: 10px 10px;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
}
.terms {
  display: flex;
  align-items: center;
}
input[type='checkbox'] {
  width: 16px;
}
button {
  border: none;
  background-color: green;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 20px;
}
.skillItem {
  background-color: white;
  margin: 20px 10px;
  display: inline-block;
  padding: 8px 10px;
  border-radius: 20px;
  color:grey;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
</style>
