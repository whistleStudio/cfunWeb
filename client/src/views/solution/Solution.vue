<!-- solution -->
<template>
  <div>
    <div :style="{backgroundImage: `url(${bannerUrl})`}" 
    class="topBanner"></div>
    <div class="content">
      <img v-for="(v, i) in mainUrl" :key="i" 
      :src="v" alt="">
    </div> 
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bannerUrl: "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/slu/slu-09.jpg",
        mainUrl:[
          "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/slu/slu-10.jpg",
          "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/slu/slu-11.jpg"
        ]
      };
    },
    components: {},
  }
</script>

<style scoped>
.topBanner {
  width: 100%;
  min-width: 1000px;
  height: 500px;
  background: center/cover no-repeat;
}
.content {
  width: 60%;
  min-width: 600px;
  margin: 0 auto;
  margin-bottom: 5rem;
}
.content img {
  margin-top: 20px;
  display: block;
  width: 100%;
}  
</style>