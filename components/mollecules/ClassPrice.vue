<template>
  <div class="w-[240px] xl:w-auto shadow-sm rounded-sm bg-white text-center">
    <div
      class="
        w-[240px]
        xl:w-auto
        relative
        z-10
        px-4
        py-5
        lg:py-8
        shadow
        rounded-sm
      "
    >
      <h3 class="text-16 lg:text-20 font-bold leading-tight tracking-tight">
        {{ packet.classType }}
      </h3>
      <p class="font-medium text-16 lg:text-20">{{ packet.className }}</p>
      <div class="flex justify-center items-start my-8 lg:my-12 mx-auto">
        <p class="font-medium leading-3">Rp</p>
        <p class="text-[58px] font-bold leading-8">
          {{ packet.price }}<span class="text-26">{{ packet.priceType }}</span>
        </p>
      </div>

      <Button
        :content="`${packet.isActive ? 'Lihat Detail Kelas' : 'Coming Soon'} `"
        class="!text-14 lg:!text-16 py-2 lg:py-3"
        @click="
          $router.push(`/class?paket_kelas=${packet.slug}&id_kelas=${id}`)
        "
        :disabled="!packet.isActive"
      />
    </div>
    <p
      class="
        relative
        z-10
        py-4
        px-2
        text-center
        shadow
        rounded-sm
        text-14
        lg:text-16
        font-medium
      "
      v-for="(item, idx) in packet.scheduling"
      :key="idx"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  components: { Button },

  props: {
    packet: {
      type: Object,
      default: () => {},
    },
    id: {
      type: Number | String,
      default: 0,
    },
  },
};
</script>

<style></style>
