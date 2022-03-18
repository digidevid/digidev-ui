<template>
  <div class="navigation h-[250px] md:h-[350px]">
    <div class="container pt-9">
      <nuxt-link to="/"
        ><img class="max-w-[56px]" src="~/static/digidev-bw.png" alt=""
      /></nuxt-link>
    </div>
    <div class="container space-y-5 my-[30px] md:my-[40px]">
      <p
        class="
          text-white text-26
          sm:text-26
          md:text-52
          lg:text-52
          leading-relaxed
          max-w-[1116px]
          font-bold
        "
      >
        DigiDev Career <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  background-image: url("~/static/images/hero/hero6.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>
