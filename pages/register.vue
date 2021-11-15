<template>
  <div>
    <NavbarRegister />
    <Register />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/organisms/Footer.vue";
import NavbarRegister from "../components/organisms/NavbarRegister.vue";
import Navigation from "../components/organisms/Navigation.vue";
import Register from "../components/organisms/Register.vue";
export default {
  components: { Navigation, Footer, Register, NavbarRegister },
};
</script>

<style></style>
