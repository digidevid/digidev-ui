<template>
  <div
    class="
      grid
      lg:grid-cols-4
      grid-cols-2
      lg:gap-8
      gap-1
      items-end
      lg:mt-[78px]
      mt-[33px]
    "
  >
    <div class="md:flex sm:flex hidden lg:space-x-4 space-x-2 items-center">
      <img
        :src="`${currentTestimony.photo}`"
        class="object-cover w-[40px] md:w-[56px] rounded-full"
      />

      <div>
        <p class="lg:text-20 text-14 font-bold">{{ currentTestimony.name }}</p>
        <p class="lg:text-16 text-12 light-grey font-medium">
          {{ currentTestimony.job }}
        </p>
      </div>
    </div>

    <div class="col-span-3">
      <div class="flex lg:items-start space-x-3 pb-[40px] border-b-2">
        <img class="self-start" src="/images/vector/quote.png" alt="quotes" />
        <p class="lg:text-18 text-12">
          {{ currentTestimony.testi }}
        </p>
      </div>
      <div>
        <div
          class="
            flex
            md:justify-end
            justify-between
            items-center
            space-x-3
            mt-4
          "
        >
          <div
            class="md:hidden sm:hidden flex lg:space-x-4 space-x-2 items-center"
          >
            <img
              :src="`${currentTestimony.photo}`"
              class="object-cover w-[40px] md:w-[56px] rounded-full"
            />

            <div>
              <p class="lg:text-20 text-14 font-bold">
                {{ currentTestimony.name }}
              </p>
              <p class="lg:text-16 text-12 light-grey font-medium">
                {{ currentTestimony.job }}
              </p>
            </div>
          </div>

          <div class="flex lg:space-x-5 space-x-1">
            <img
              v-if="currentTestimony.id === 1"
              class="lg:w-4 w-[13px]"
              src="/images/icons/arrow-grey-left.svg"
              alt="arrow left"
            />
            <img
              v-else
              class="cursor-pointer lg:w-4 w-[13px]"
              src="/images/icons/arrow-blue-left.svg"
              alt="arrow left"
              @click="$emit('prevTesti', currentTestimony.id)"
            />
            <p class="lg:text-18 text-14 font-medium">
              {{ currentTestimony.id }}/{{ dataTestimonies.length }}
            </p>
            <img
              v-if="currentTestimony.id === dataTestimonies.length"
              class="lg:w-4 w-[13px]"
              src="/images/icons/arrow-grey-right.svg"
              alt="arrow right"
            />
            <img
              v-else
              class="cursor-pointer lg:w-4 w-[13px]"
              src="/images/icons/arrow-blue-right.svg"
              alt="arrow right"
              @click="$emit('nextTesti', currentTestimony.id)"
            />
          </div>
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
