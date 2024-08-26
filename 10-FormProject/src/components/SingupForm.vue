<template>
  <div>
    <h2>Form Projesi</h2>
    <form>
        <label>Email:</label>
        <input type="email" required>
        <label>Şifre:</label>
        <input type="password" required>
        <label>Cinsiyet:</label>
        <select>
            <option value="kadin">Kadın</option>
            <option value="erkek">Erkek</option>
        </select>
        <div class="terms">
            <input type="checkbox" required>
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
    return {}
  }
}
</script>

<style>
h2 {
    text-align: center;
}
form{
    max-width: 500px;
    width: 100%;
    margin: 40px auto;
    background: antiquewhite;
    padding: 40px;
    border-radius: 20px;
}
input, select {
    display: block;
    width: 100%;
    padding: 10px 8px;
    border-radius: 20px;
    border:none;
    outline: none;
}
label{
  margin: 10px 10px;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
}
.terms{
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  width: 16px;
}
button{
  border:none;
  background-color: green;
  color:white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 20px;
}
</style>
