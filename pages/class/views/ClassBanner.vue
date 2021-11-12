<template>
  <div
    class="
      h-[560px]
      w-full
      rounded-t-[55px]
      bg-gradient
      overflow-hidden
      relative
      z-0
      -mb-24
    "
  >
    <div class="text-center pt-[128px]">
      <h1 class="text-40 font-bold">Tunggu apalagi? Daftar yuk!</h1>
      <p class="dark-grey text-20 w-1/2 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
        semper aliquam vel ipsum id urna enim, duis.
      </p>
      <Button class="text-18 mt-8" />
    </div>

    <div class="absolute top-0 left-0">
      <img
        src="/images/class/banner-illust-left.png"
        alt="banner illustration"
      />
    </div>
    <div class="absolute bottom-0 right-0">
      <img
        src="/images/class/banner-illust-right.png"
        alt="banner illustration"
      />
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";
export default {
  components: {
    Button,
  },
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(
    126.17deg,
    #f8fbfe 24.6%,
    rgba(253, 253, 253, 0) 95.09%
  );
}
</style>
