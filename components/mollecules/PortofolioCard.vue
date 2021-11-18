<template>
  <div
    :class="`
      ${alumni.bgColor}
      rounded-3xl
      flex flex-col
      lg:w-[360px]
      lg:h-[360px]
      w-[312px]
      h-[312px]
     
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
