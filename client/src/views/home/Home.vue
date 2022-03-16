<!--  -->
<template>
  <div id="home">
    <h-software />
    <ul>
      <li v-for="(v, i) in homeInfo" :key="i" 
      :style="{backgroundImage: `url(${require('img/home/'+v.img)})`}" 
      class="homeContent"></li>
    </ul>
  </div>
</template>

<script>
  const H_Software = ()=>import("views/home/H_Software")

  export default {
    data () {
      return {
        homeInfo:[
          {img: "hardware.jpg"},
          {img: "creative.jpg"},
          {img: "robot.jpg"},
          {img: "course.jpg"},
          {img: "activity.jpg"},
        ]
      };
    },
    components: {
      "h-software": H_Software
    },
  }
</script>

<style scoped>
.homeContent {
  width: 100%;
  height: 100vh;
  background: center/cover no-repeat;
  /* background-color: blue; */
}
</style>