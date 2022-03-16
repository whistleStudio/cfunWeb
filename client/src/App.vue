<template>
  <div id="app">
    <p-navbar />
    <router-view></router-view>
    <p-footbar />
  </div>
</template>

<script>
const PNavbar = ()=>import("components/private/PNavbar")
const PFootbar = ()=>import("components/private/PFootbar")

export default {
  data () {
    return {

    }
  },
  components: {
    "p-navbar": PNavbar,
    "p-footbar": PFootbar
  }
}
</script>


<style>
  @import "assets/css/base.css";
</style>
