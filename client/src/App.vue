<template>
  <div id="app">
    <p-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
const PNavbar = ()=>import("components/private/PNavbar")

export default {
  data () {
    return {

    }
  },
  components: {
    "p-navbar": PNavbar
  }
}
</script>


<style>
  @import "assets/css/base.css";
</style>
