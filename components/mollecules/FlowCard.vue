<template>
  <div class="mt-4 leading-7 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0">
    <div
      class="
        relative
        z-10
        flex flex-col
        items-center
        max-w-[300px] max-h-[350px]
        p-4
        mx-auto
        my-0
        sm:my-0 sm:p-6
        md:my-8 md:p-8
      "
    >
      <div class="mb-3 relative w-[56px] h-[56px] rounded-full bg-[#F0F6FF]">
        <div class="vector">
          <img
            :src="`/images/vector/${vectorElement}.png`"
            :alt="`${vectorElement}`"
          />
        </div>
      </div>
      <h3
        class="
          text-center
          m-0
          font-semibold
          leading-tight
          tracking-tight
          text-black text-2xl
        "
      >
        {{ headerContent }}
      </h3>
      <p class="text-center">{{ paragraphContent }}</p>
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
