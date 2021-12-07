<template>
  <div
    class="
      snackbar
      max-w-md
      rounded-lg
      fixed
      w-11/12
      md:w-full
      py-3
      px-4
      text-white text-center
      z-50
      shadow-xl
    "
    :class="[`${bgColor}`, { show: isShow }]"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: "",
      bgColor: "bg-primary",
    };
  },
  methods: {
    showSnackbar({ color, message }) {
      this.bgColor = color ? color : "bg-primary";
      this.message = message;
      this.isShow = true;
      this.hideSnackbar();
    },
    hideSnackbar() {
      if (this.isShow) {
        setTimeout(
          function () {
            this.isShow = false;
          }.bind(this),
          3500
        );
      }
    },
  },
};
</script>

<style>
.snackbar {
  left: 50%;
  transform: translateX(-50%);
  bottom: -300px;
  transition: all 0.5s linear;
}
.show {
  bottom: 30px;
}
</style>
