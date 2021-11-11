<template>
  <div class="">
    <img class="w-[100px]" :src="`/images/partner/${partnerName}.png`" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    partnerName: {
      type: String,
      default: "IREDIUM",
    },
  },
};
</script>

<style></style>
