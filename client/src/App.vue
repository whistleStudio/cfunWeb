<template>
  <div id="app">
    <p-navbar v-if="$route.path!=='/documents'"/>
    <router-view></router-view>
    <p-footbar v-if="$route.path!=='/documents'&&$route.path!=='/support/measures'"/>
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
