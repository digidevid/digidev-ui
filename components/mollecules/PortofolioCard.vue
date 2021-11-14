<template>
  <div
    :class="`
      ${alumni.bgColor}
      rounded-3xl
      flex flex-col
      w-[360px]
      h-[360px]
      mx-4
      py-9
      items-center
      text-center`"
  >
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    alumni: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
