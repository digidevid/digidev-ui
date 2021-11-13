<template>
  <div
    :class="`
      ${alumni.bgColor}
      rounded-xl
      flex flex-col
      w-[360px]
      h-[360px]
      py-9
      shadow-xl
      items-center
      text-center`"
  >
    <div>
      <h2 class="font-bold pt-6">{{ alumni.alumniName }}</h2>
      <p>{{ alumni.skill }}</p>
    </div>
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
