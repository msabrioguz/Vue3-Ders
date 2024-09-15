<template>
  <div>
    <h1>Ad: {{ myObject.name }}</h1>
    <h2 ref="myRef">Yaş: {{ myObject.age }}</h2>
    <button @click="handleClick">Tıkla</button>
  </div>

  <h3>Reactive</h3>
  <div>
    <h1>Ad: {{ myObjectTwo.name }}</h1>
    <h2>Yaş: {{ myObjectTwo.age }}</h2>
    <button @click="handleClickTwo">Tıkla</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'App',

  setup() {
    const myObject = ref({ name: 'Mustafa', age: 35 });
    const myObjectTwo = reactive({ name: 'Ali', age: 30 });
    const name = ref("Mustafa Oğuz");
    const age = ref(35);

    // const myRef = ref(null);

    const handleClick = () => {
      myObject.value.name = 'Ali';
      myObject.value.age = 40;
    };

    const handleClickTwo = () => {
      myObjectTwo.name = 'Ahmet';
      myObjectTwo.age = 60;
    };

    return { myObject, myObjectTwo, name, age, handleClick, handleClickTwo };
  }
}
</script>

<style></style>
