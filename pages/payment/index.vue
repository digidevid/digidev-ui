<template>
  <div class="relative -z-1">
    <NavDoneTransaction />
    <div class="absolute z-30 w-full top-32 md:top-36 lg:top-28">
      <ClassOrdered class="lg:-mt-0 -mt-8" />
    </div>
  </div>
</template>

<script>
import NavDoneTransaction from "~/components/organisms/NavDoneTransaction.vue";
import ClassOrdered from "./views/ClassOrdered.vue";
export default {
  components: { NavDoneTransaction, ClassOrdered },
};
</script>

<style></style>
