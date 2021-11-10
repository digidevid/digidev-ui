<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">FAQ Kelas</h1>
    <div class="mt-12 space-y-8">
      <div v-for="(faq, id) in classFaq" :key="id">
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
          <p
            class="text-[18px] font-bold"
            :class="{ 'text-blue-500': faq.isActive }"
          >
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
      <div class="grid grid-cols-12 items-start">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classFaq: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
