<template>
  <div class="flex justify-center w-full">
    <div
      class="
        flex
        md:w-[1000px] md:h-[200px]
        w-[312px]
        h-[96px]
        items-start
        md:items-center
        mb-[40px]
        rounded-[20px]
        shadow-md
        space-x-[32px]
      "
    >
      <div>
        <img
          class="max-w-[200] min-w-[96px] h-[96px] md:h-[200px]"
          :src="`/images/vector/${imageName}.png`"
          alt="register"
        />
      </div>
      <div class="grid place-items-center">
        <div>
          <h1
            class="
              text-14
              sm:text-14
              md:text-32
              lg:text-32
              font-bold
              pt-4
              md:pt-0
            "
          >
            {{ nameClass }}
          </h1>
          <h3 class="md:text-20 lg:text-20 sm:text-12 text-12 font-semibold">
            {{ price }}
          </h3>
          <p class="md:block sm:hidden lg:block hidden">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      default: "register",
    },
    nameClass: {
      type: String,
      default: "Kelas Frontend (Vue Js)",
    },
    // price: {
    //   type: String,
    //   default: "Rp1.500.000,-",
    // },
    description: {
      type: String,
      default:
        "Mentor dengan segudang pengalaman yang berkarir di startup ternama lorem ipsum.",
    },
  },
};
</script>

<style></style>
