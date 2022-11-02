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
  data () {
    return {

    }
  },
  computed: {
    isMobilePhone() {
      const ua = navigator.userAgent.toLowerCase();
      const t1 = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua);
      return t1 ;
    }
  },
  components: {
    "p-navbar": PNavbar,
    "p-footbar": PFootbar
  },
  created () {
    if (this.isMobilePhone) window.location="https://dictwx.cfunworld.com"
  }
}
</script>


<style>
  @import "assets/css/base.css";
</style>
