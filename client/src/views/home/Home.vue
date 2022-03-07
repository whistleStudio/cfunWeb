<!--  -->
<template>
  <div id="home">
    <h-software />
  </div>
</template>

<script>
  const H_Software = ()=>import("views/home/H_Software")

  export default {
    data () {
      return {
      };
    },
    components: {
      "h-software": H_Software
    },
  }
</script>

<style scoped>
</style>