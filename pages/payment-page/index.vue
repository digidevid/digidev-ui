<template>
  <div>
    <NavDoneTransaction />
    <div class="lg:px-[220px] px-6 w-full">
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
