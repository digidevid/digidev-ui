<template>
  <div
    :class="`
      rounded-3xl
      h-[312px]
      w-[312px]
      md:h-[360px]
      md:w-[360px]
      mx-4
      py-9
      flex flex-col
      items-center
      text-center
      hide-scroll-bar`"
  >
    <div
      class="cursor-pointer hover:border-2 hover:border-[#F0F6FF]"
      @click="clickPortfolio(portfolio)"
    >
      <img :src="`/images/portfolio/${portfolio.name}.png`" alt="mentor" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clickPortfolio(portfolio) {
      window.open(portfolio.url);
    },
  },
};
</script>
