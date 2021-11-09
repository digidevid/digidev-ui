<template>
  <div>
    <button :class="`btn-${type} px-5 py-3 rounded-full font-bold`">
      {{ content }}
    </button>
  </div>
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
