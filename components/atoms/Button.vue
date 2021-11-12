<template>
  <!-- <div class="w-full"> -->
  <button :class="`btn-${type} px-5 py-3 text-20 rounded-full font-bold`">
    {{ content }}
  </button>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "Daftar Sekarang",
    },
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style></style>
