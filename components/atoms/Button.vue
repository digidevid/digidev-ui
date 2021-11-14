<template>
  <button
    :class="`btn-${type} px-6 py-3 text-20 rounded-full font-bold`"
    @click="$emit('click')"
  >
    {{ content }}
  </button>
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
