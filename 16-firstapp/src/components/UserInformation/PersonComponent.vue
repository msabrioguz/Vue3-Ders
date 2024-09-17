<template>
  <div class="personContainer">
    <h2>Kişi Bilgileri</h2>
    <ul>
      <li><span> Adınız: </span> {{ name }}</li>
      <li><span> Soyadınız: </span> {{ lastname }}</li>
      <li><span> Yaşınız: </span> {{ age }}</li>
    </ul>

    <button @click="updateLastName">Soyadı Değiştir</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['onUpdateLastName']);

defineProps({
  name: { 
    type: String, 
    required: true,
    default: 'Hakan',

  },
  lastname: String,
  age: {
    type:Number,
    required: true,
    validator(value){
      if(value > 30){
        return true;
      }else {
        return false;
      }
    }
  }
});

const updateLastName = () => {
  emit('onUpdateLastName', 'Yavaş');
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
ul li {
  padding: 20px 0;
  font-size: 18px;
}
span {
  font-weight: bold;
}
.personContainer {
  border: 1px solid lightblue;
  padding: 30px;
  border-radius: 30px;
}
</style>
