<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">Tipe Kelas</h1>
    <p class="dark-grey text-18">
      Tipe kelas yang tersedia yaitu sebagai berikut.
    </p>
    <div class="my-8 space-y-6">
      <div
        v-for="(type, id) in classTypes"
        :key="id"
        class="grid grid-cols-2 rounded-xl shadow-lg overflow-hidden max-w-3xl"
      >
        <div>
          <img
            class="w-full h-auto image-cover"
            src="/images/class/class-type.png"
            alt="private class"
          />
        </div>
        <div class="p-6">
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
  },
};
</script>

<style></style>
