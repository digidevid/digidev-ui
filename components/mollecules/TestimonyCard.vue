<template>
  <div class="grid grid-cols-4 gap-8 items-end mt-[78px] px-8">
    <div class="flex space-x-4 items-center">
      <div class="w-[56px] h-[56px]">
        <img
          :src="`${currentTestimony.photo}`"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
      <div>
        <p class="text-20 font-bold">{{ currentTestimony.name }}</p>
        <p class="text-16 light-grey font-medium">{{ currentTestimony.job }}</p>
      </div>
    </div>

    <div class="col-span-3">
      <div class="flex items-start space-x-3 pb-[40px] border-b-2">
        <img src="/images/vector/quote.png" alt="quotes" />
        <p class="text-18">
          {{ currentTestimony.testi }}
        </p>
      </div>
      <div>
        <div class="flex justify-end items-center space-x-3 mt-4">
          <img
            v-if="currentTestimony.id === 1"
            class="w-4"
            src="/images/icons/arrow-grey-left.svg"
            alt="arrow left"
          />
          <img
            v-else
            class="cursor-pointer w-4"
            src="/images/icons/arrow-blue-left.svg"
            alt="arrow left"
            @click="$emit('prevTesti', currentTestimony.id)"
          />
          <p class="text-18 font-medium">
            {{ currentTestimony.id }}/{{ dataTestimonies.length }}
          </p>
          <img
            v-if="currentTestimony.id === dataTestimonies.length"
            class="w-4"
            src="/images/icons/arrow-grey-right.svg"
            alt="arrow right"
          />
          <img
            v-else
            class="cursor-pointer w-4"
            src="/images/icons/arrow-blue-right.svg"
            alt="arrow right"
            @click="$emit('nextTesti', currentTestimony.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataTestimonies: {
      type: Array,
      default: () => [],
    },
    currentTestimony: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
