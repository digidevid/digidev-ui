<template>
  <div>
    <NavDoneTransaction />
    <ConfirmationClass class="lg:-mt-20 -mt-28" />
  </div>
</template>

<script>
import NavDoneTransaction from "../../components/organisms/NavDoneTransaction.vue";
import ConfirmationClass from "./views/ConfirmationClass.vue";
export default {
  components: { NavDoneTransaction, ConfirmationClass },
};
</script>

<style></style>
