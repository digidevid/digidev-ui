<template>
  <div>
    <h1 class="text-20 lg:text-32 font-bold leading-10">Biaya & Benefit</h1>
    <p class="dark-grey lg:mt-4 text-14 lg:text-18">
      Berikut ini merupakan biaya dan benefit dari kelas {{ classTitle }}.
    </p>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(type, id) in classTypes"
        :key="id"
        class="rounded-xl shadow-lg overflow-hidden max-w-md"
      >
        <div>
          <img
            class="w-full h-auto image-cover"
            :src="`${type.image}`"
            alt="private class"
          />
        </div>
        <div class="p-4 md:p-6">
          <p class="font-bold text-lg">{{ type.name }}</p>
          <div class="flex items-start my-5">
            <p class="text-xs font-medium">Rp</p>
            <p class="text-4xl font-bold leading-8">
              {{ type.price
              }}<span class="text-base">{{ type.priceType }}</span>
            </p>
          </div>
          <div class="space-y-2">
            <div
              v-for="(item, id) in type.details"
              :key="id"
              class="flex space-x-3 items-start"
            >
              <img class="mt-1" src="/images/icons/tick.svg" alt="tick icon" />
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classTypes: {
      type: Array,
      default: () => [],
    },
    classTitle: {
      type: String,
      default: "Basic Web",
    },
  },
};
</script>

<style></style>
