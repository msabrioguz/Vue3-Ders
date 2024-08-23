<script>
export default {
  name: "App",

  data() {
    return {
      students: [
        {
          id: 1,
          name: "Mustafa",
          lastName: "Oguz",
          age: 25,
          phone: "5555555555",
        },
        {
          id: 2,
          name: "Ali",
          lastName: "Veli",
          age: 30,
          phone: "5555555555",
        },
        {
          id: 3,
          name: "Veli",
          lastName: "Ali",
          age: 35,
          phone: "5555555555",
        },
      ],
    };
  },
};
</script>

<template>
  <h2>Öğrencilerim</h2>
  <div v-for="student in students" :key="student.id">
    <h3>{{ student.name }} {{ student.lastName }}</h3>
    <p>Yaş: {{ student.age }} - Telefon: {{ student.phone }}</p>
  </div>
</template>

<style scoped></style>
