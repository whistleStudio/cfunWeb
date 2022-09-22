<!--  -->
<template>
  <div id="home">
    <h-software />
    <ul>
      <li v-for="(v, i) in homeInfo" :key="i" 
      v-lazy:background-image="v.img"
      class="homeContent"></li>
    </ul>
  </div>
</template>

<script>
  //:style="{backgroundImage: `url(${require('img/home/'+v.img)})`}" 
  const H_Software = ()=>import("views/home/H_Software")

  export default {
    data () {
      return {
        homeInfo:[
          {img: "https://dict.cfunworld.com/img/cfweb/hardware.jpg"},
          {img: "https://dict.cfunworld.com/img/cfweb/creative.jpg"},
          {img: "https://dict.cfunworld.com/img/cfweb/robot.jpg"},
          {img: "https://dict.cfunworld.com/img/cfweb/course.jpg"},
          {img: "https://dict.cfunworld.com/img/cfweb/activity.jpg"},
        ],        
        // homeInfo:[
        //   {img: "hardware.jpg"},
        //   {img: "creative.jpg"},
        //   {img: "robot.jpg"},
        //   {img: "course.jpg"},
        //   {img: "activity.jpg"},
        // ]
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
  /* background-color: blue; */
}
.homeContent[lazy=loaded] {
  background: center/cover no-repeat;
}
.homeContent[lazy=loading] {
  background: center no-repeat;
}
.homeContent[lazy=error] {
  background: center/700px 350px no-repeat;
}
</style>