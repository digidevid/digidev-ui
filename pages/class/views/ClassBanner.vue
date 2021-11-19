<template>
  <div
    class="
      h-[560px]
      w-full
      rounded-t-[25px]
      md:rounded-t-[55px]
      bg-gradient
      overflow-hidden
      relative
      z-0
      -mb-24
      px-[24px]
      md:px-0
    "
  >
    <div class="text-center pt-[90px] md:pt-[128px] relative z-10">
      <h1 class="text-24 lg:text-40 font-bold">Tunggu apa lagi? Daftar yuk!</h1>
      <p class="dark-grey text-14 lg:text-20 md:w-3/4 lg:w-1/2 mx-auto mt-4">
        Yuk daftar kelas {{ classTitle }} untuk mempersiapkan dirimu dalam
        berkarir di dunia profesional. Jika kamu berminat jadi mentor, silahkan
        klik button Jadi Mentor di bawah.
      </p>
      <Button
        type="secondary"
        content="Daftar Jadi Mentor"
        class="
          py-2
          lg:py-3
          !text-14
          lg:!text-18
          mt-4
          lg:mt-8 lg:mr-4
          w-3/4
          md:w-1/2
          lg:w-auto
        "
      />
      <Button
        class="
          py-2
          lg:py-3
          !text-14
          lg:!text-18
          mt-2
          lg:mt-8
          w-3/4
          md:w-1/2
          lg:w-auto
        "
      />
    </div>

    <div class="absolute w-1/2 md:w-auto z-0 top-0 left-0">
      <img
        src="/images/class/banner-illust-left.png"
        alt="banner illustration"
      />
    </div>
    <div class="absolute w-1/2 md:w-auto bottom-0 right-0">
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
  props: {
    classTitle: {
      type: String,
      default: "Basic Web",
    },
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
