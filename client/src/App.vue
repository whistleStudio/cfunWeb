<template>
  <div id="app">
    <p-navbar v-if="$route.path!=='/documents'"/>
    <router-view></router-view>
    <p-footbar v-if="$route.path!=='/documents'&&$route.path!=='/support/measures'&&$route.path!=='/creative'"/>
  </div>
</template>

<script>
const PNavbar = ()=>import("components/private/PNavbar")
const PFootbar = ()=>import("components/private/PFootbar")

export default {
  components: {
    "p-navbar": PNavbar,
    "p-footbar": PFootbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  #app {
    /* 仅PC端限制宽度，移动端自适应 */
    min-width: 1000px;
    width: 100%;
  }
  @media (max-width: 768px) {
    #app {
      min-width: 0 !important;
      width: 100vw !important;
      overflow-x: hidden !important;
    }
  }
</style>