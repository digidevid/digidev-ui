<template>
  <button
    :class="`btn-${type} px-6 py-3 text-${textSize} rounded-full font-bold`"
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
    textSize: {
      type: String,
      default: "20",
    },
  },
};
</script>

<style></style>
