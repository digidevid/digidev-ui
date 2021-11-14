<template>
  <div
    :class="`
      ${alumni.bgColor}
      rounded-xl
      flex flex-col
      w-[360px]
      h-[360px]
      mx-4
      py-9
      shadow-xl
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
