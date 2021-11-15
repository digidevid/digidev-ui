<template>
  <div
    class="
      leading-7
      border-0 border-gray-200
      sm:mt-6 sm:gap-6
      md:mt-8 md:gap-0
      bg-white
    "
  >
    <div
      class="
        relative
        z-10
        flex flex-col
        items-center
        max-w-[280px] max-h-[350px]
        px-4
        py-8
        mx-auto
        my-0
        shadow
        rounded-sm
      "
    >
      <h3
        class="
          m-0
          text-20
          font-bold
          leading-tight
          tracking-tight
          border-0 border-gray-200
        "
      >
        {{ packet.classType }}
      </h3>
      <p class="font-medium">{{ packet.className }}</p>
      <div
        class="
          relative
          flex
          items-end
          mt-6
          leading-7
          text-gray-900
          border-0 border-gray-200
        "
      >
        <p
          class="box-border m-0 border-solid absolute top-0 left-[-20px]"
          style="border-image: initial"
        >
          Rp
        </p>
        <p
          class="
            box-border
            m-0
            text-6xl
            font-semibold
            leading-none
            border-solid
          "
        >
          {{ packet.price }}
        </p>
        <p
          class="box-border font-bold m-0 border-solid text-xl"
          style="border-image: initial"
        >
          {{ packet.priceType }}
        </p>
      </div>

      <Button
        content="Lihat Detail Kelas"
        class="mt-8 text-16 py-[14px] px-[36px]"
        @click="
          $router.push(`/class?paket_kelas=${packet.slug}&id_kelas=${id}`)
        "
      />
    </div>
    <p
      class="
        relative
        z-10
        flex flex-col
        items-center
        max-w-[280px]
        p-4
        mx-auto
        shadow
        rounded-sm
        text-16
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
