<template>
  <div class="relative -z-1">
    <NavDoneTransaction />
    <div class="absolute z-30 lg:px-[220px] px-6 w-full top-36 md:top-28">
      <ClassOrdered />
      <PaymentMethods />
    </div>
  </div>
</template>

<script>
import NavDoneTransaction from "../../components/organisms/NavDoneTransaction.vue";
import ClassOrdered from "../payment-page/views/ClassOrdered.vue";
import PaymentMethods from "../payment-page/views/PaymentMethods.vue";
export default {
  components: { NavDoneTransaction, ClassOrdered, PaymentMethods },
};
</script>

<style></style>
