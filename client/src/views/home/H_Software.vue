<!-- H_Software -->
<template>
  <div  id="HSoftware">
    <div>
      <div id="computer"></div>
      <div id="resume"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    components: {},
  }
</script>

<style scoped>
#HSoftware {
 width: 100%;
 height: 100vh;
 background: url("~img/home/softwareBg.jpg") center/cover no-repeat;
 display: flex;
 justify-content: center;
 align-items: center;
}
#HSoftware>div {
  width: 80%;
  height: 65vh;
  /* background-color: orange; */
}
#computer {
  float: left;
  width: calc(65vh * 1.5);
  height: 65vh;
  background: url("~img/home/softwareC.png") center/cover no-repeat;
}
</style>