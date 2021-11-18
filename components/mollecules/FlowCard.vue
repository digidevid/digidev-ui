<template>
  <div class="leading-7">
    <div
      class="relative z-10 lg:text-center mx-auto my-2 xl:my-4 xl:my-8 xl:p-3"
    >
      <div
        class="relative w-[56px] h-[56px] rounded-full bg-[#F0F6FF] lg:mx-auto"
      >
        <div class="vector">
          <img
            :src="`/images/vector/${vectorElement}.png`"
            :alt="`${vectorElement}`"
          />
        </div>
      </div>
      <h3
        class="
          mt-4
          xl:mt-7
          font-bold
          xl:font-semibold
          leading-tight
          tracking-tight
          text-18
          lg:text-24
        "
      >
        {{ headerContent }}
      </h3>
      <p class="text-14 lg:text-16 mt-2">{{ paragraphContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vectorElement: {
      type: String,
      default: "NotePencil",
    },
    headerContent: {
      type: String,
      default: "Daftar",
    },
    paragraphContent: {
      type: String,
      default:
        "Tunggu admin digidev menghubungi kamu untuk melakukan persiapan kelas.",
    },
  },
};
</script>

<style>
.vector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
