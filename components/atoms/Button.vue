<template>
  <div>
      <button :class="`bg-`">
          {{content}}
      </button>
  </div>
</template>

<script>
export default {
    props: {
        content : {
            type : String,
            default : "Daftar sekarang"
        }
    }

}
</script>

<style>

</style>