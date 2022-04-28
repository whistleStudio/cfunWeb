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
          {img: "https://s1.ax1x.com/2022/04/28/LOMkuV.jpg"},
          {img: "https://s1.ax1x.com/2022/04/28/LOMZEF.jpg"},
          {img: "https://s1.ax1x.com/2022/04/28/LOMij0.jpg"},
          {img: "https://s1.ax1x.com/2022/04/28/LOMABT.jpg"},
          {img: "https://s1.ax1x.com/2022/04/28/LOMEHU.jpg"},
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