<template>
  <div>
    <Navbar />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/organisms/Footer";
import Navbar from "../register/views/Navbar.vue";
import Form from "../register/views/Form.vue";
export default {
  components: { Footer, Form, Navbar },
};
</script>

<style></style>
