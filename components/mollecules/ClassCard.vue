<template>
  <div class="rounded-xl shadow-lg bg-white overflow-hidden mt-4 md:mt-0">
    <div>
      <img
        class="h-[70px] md:h-[100px] w-full object-cover"
        :src="`${dataClass.image}`"
        alt="frontend master"
      />
    </div>
    <div class="py-2 px-3 md:px-8 lg:py-3 lg:px-4 border-b-2 mt-2 md:mt-0">
      <h1 class="text-center text-lg md:text-lg font-bold">
        {{ dataClass.name }}
      </h1>
      <div class="my-2 text-14 md:text-14">
        <div
          v-for="(type, id) in dataClass.classType"
          :key="id"
          class="flex justify-between items-center"
        >
          <p>{{ type.name }}</p>
          <div class="flex">
            <del class="text-10 mt-1">
              {{ toRupiah(type.oriPrice) }}
            </del>
            <p class="font-semibold text-primary ml-2">
              {{ toRupiah(type.price) }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:pt-2 mb-3 md:mb-0 mt-4 md:mt-0">
        <Button
          :content="`${
            dataClass.isActive ? 'Lihat Detail Kelas' : 'Coming Soon'
          } `"
          class="!text-14 w-full hidden md:block"
          @click="
            $router.push(`/class?paket_kelas=${dataClass.slug}&id_kelas=${id}`)
          "
          :disabled="!dataClass.isActive"
        />
        <Button
          :content="`${dataClass.isActive ? 'Detail Kelas' : 'Coming Soon'} `"
          class="!text-12 !py-2 w-full md:hidden"
          @click="
            $router.push(`/class?paket_kelas=${dataClass.slug}&id_kelas=${id}`)
          "
          :disabled="!dataClass.isActive"
        />
      </div>
    </div>
    <div class="p-3 md:px-8 lg:p-4 text-14 md:text-14">
      <div
        v-for="(benefit, id) in dataClass.benefits"
        :key="id"
        class="flex space-x-2"
      >
        <span class="text-primary text-xs mt-[1px] md:mt-[2px]">
          <i class="fas fa-check text-[8px] bg-gray-200 rounded-full p-1"></i>
        </span>
        <p>{{ benefit }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button.vue";
import { toRupiah } from "~/helper/currency.js";
export default {
  props: {
    dataClass: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String | Number,
      default: 0,
    },
  },
  components: {
    Button,
  },
  methods: {
    toRupiah,
  },
};
</script>

<style></style>
