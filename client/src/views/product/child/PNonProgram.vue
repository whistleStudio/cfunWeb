<!-- 非编程 -->
<template>
  <div class="np">
    <ul class="flex-col-center">
      <li class="flex-col-center" v-for="(v, i) in list" :key="i">
        <div class="np-title">{{v.title}}</div>
        <img class="np-img" v-for="(pv, pi) in v.img" :key="pi" :src="pv">
        <video v-if="i" src="https://dict.cfunworld.com/img/cfweb/product/%E6%98%93%E8%B6%A3%E6%99%BA%E8%83%BD%E7%99%BE%E6%8B%BC.mp4" controls></video>
      </li>
    </ul>
    <div class="np-t flex-col-center">
      <div class="np-title">配套课程</div>
      <img class="np-img" src="https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%964.png" alt="">
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {title: "创趣魔格", img:["https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%961.png", "https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%962.png"]},
          {title: "易趣百拼", img:["https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%963.png"]}
        ]
      };
    },
    components: {},
  }
</script>

<style scoped lang="scss">
.np{
  width: 100%;
  margin-top: 50px;
  .np-title {
    font: bold 40px/80px $fontF;
    color: $gray100;
  }
  >ul {
    width: 100%;
    >li {
      margin-bottom: 100px;
      .np-img {
        &:first-of-type {
          width: 500px !important;
        }
        &:last-of-type {
          width: 1400px;
        }
      }
      video {
        width: 1200px;
      }
    }
  }
}
</style>