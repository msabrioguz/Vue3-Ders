<template>
  <h1 style="text-align: center">Öğrenci Formu</h1>
  <form @submit.prevent="submitForm">
    <div class="formControl">
      <label>Ad:</label>
      <input type="text" v-model="enteredName" />
      <div style="color: red" v-if="nameError">{{ nameError }}</div>
    </div>
    <div class="formControl">
      <label>Soyad:</label>
      <input type="text" v-model="enteredLastName" />
      <div style="color: red" v-if="lastNameError">{{ lastNameError }}</div>
    </div>
    <div class="formControl">
      <label>Telefon:</label>
      <input type="tel" v-model="enteredPhone" />
      <div style="color: red" v-if="phoneError">{{ phoneError }}</div>
    </div>
    <div class="formControl">
      <label>Email:</label>
      <input type="email" v-model="enteredEmail" />
      <div style="color: red" v-if="mailError">{{ mailError }}</div>
    </div>
    <div class="formControl">
      <label>Yaş:</label>
      <input type="number" v-model="enteredAge" />
      <div style="color: red" v-if="ageError">{{ ageError }}</div>
    </div>
    <div class="formControl">
      <label>Sınıfı geçti mi?:</label>
      <input type="checkbox" v-model="enteredIsPassed" />
    </div>
    <div class="formControl">
      <button>Kaydet</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "new-student",
  emits: ["add-student"],
  data() {
    return {
      enteredName: "",
      enteredLastName: "",
      enteredPhone: "",
      enteredEmail: "",
      enteredAge: 16,
      enteredIsPassed: false,
      nameError: "",
      lastNameError: "",
      phoneError: "",
      emailError: "",
      ageError: "",
    };
  },
  methods: {
    submitForm() {
      // Validasyonlar
      if (this.enteredName === "") {
        this.nameError = "İsim zorunludur.";
      } else if (this.lastNameError === "") {
        this.lastNameError = "Soyad zorunludur.";
      } else if (this.phoneError === "") {
        this.phoneError = "Telefon numarası zorunludur.";
      } else if (this.emailError === "") {
        this.emailError = "Email zorunludur.";
      } else if (this.ageError === "") {
        this.ageError = "Yaş zorunludur.";
      } else {
        this.nameError = "";
        this.lastNameError = "";
        this.phoneError = "";
        this.emailError = "";
        this.ageError = "";

        // Form bilgilerini al ve yeni nesne oluştur
        const newStudent = {
          name: this.enteredName,
          lastName: this.enteredLastName,
          phone: this.enteredPhone,
          email: this.enteredEmail,
          age: this.enteredAge,
          isPassed: this.enteredIsPassed,
        };

        // Emit ile veri aktarma
        this.$emit("add-student", newStudent);

        // Formu sıfırla
        this.enteredName = "";
        this.enteredLastName = "";
        this.enteredPhone = "";
        this.enteredEmail = "";
        this.enteredAge = 16;
        this.enteredIsPassed = false;
      }
    },
  },
};
</script>

<style scoped></style>
