<template>
  <div>
    <div
      class="
        flex
        justify-between
        items-center
        rounded-t-xl
        bg-white
        border
        p-7
        cursor-pointer
      "
      :class="{ 'rounded-b-xl': !faq.isActive }"
      @click="faq.isActive = !faq.isActive"
    >
      <p class="text-18 font-bold" :class="{ 'text-primary': faq.isActive }">
        {{ faq.question }}
      </p>
      <img
        v-if="faq.isActive"
        src="/images/icons/arrow-up.svg"
        alt="arrow up"
      />
      <img v-else src="/images/icons/arrow-down.svg" alt="arrow down" />
    </div>
    <div class="bg-[#fafafa] border p-7" v-if="faq.isActive">
      <p class="dark-grey">{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
