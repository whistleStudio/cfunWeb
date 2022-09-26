<!-- course -->
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
        bannerUrl: "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/course/cos-01.jpg",
        mainUrl:[
          "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/course/cos-02.jpg",
          "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/course/cos-03.jpg",
          "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/img/cfweb/course/cos-04.jpg"
        ]
      };
    },
    components: {},
  }
</script>

<style scoped>
.topBanner {
  width: 100%;
  height: 500px;
  background: center/cover no-repeat;
}
.content {
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
}
.content img {
  margin-top: 20px;
  display: block;
  width: 100%;
}  
</style>