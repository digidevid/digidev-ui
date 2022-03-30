<template>
  <div class="w-screen h-screen relative">
    <div class="flex justify-center items-center w-full h-full">
      <div>
        <p>Redirecting to Digi-Cafe...</p>
        <div
          class="w-full h-3 bg-gray-300 animate-pulse rounded-full mt-2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.location = "https://digidevid.github.io/Digi-Cafe/";
  },
};
</script>

<style></style>
