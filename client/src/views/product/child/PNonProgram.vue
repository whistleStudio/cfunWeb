<!-- 非编程 -->
<template>
  <div class="np">
    <ul class="flex-col-center">
      <li class="flex-col-center" v-for="(v, i) in list" :key="i">
        <div class="np-title">{{v.title}}</div>
        <div class="np-sum">{{v.sum}}</div>
        <img class="np-img" v-for="(pv, pi) in v.img" :key="pi" :src="pv">
        <video v-if="i" src="https://dict.cfunworld.com/img/cfweb/product/%E6%98%93%E8%B6%A3%E6%99%BA%E8%83%BD%E7%99%BE%E6%8B%BC.mp4" controls
        poster="https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%96%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.png"></video>
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
          {title: "创趣魔格", sum: "磁吸锁扣，安全稳定，电子电路启蒙教育", img:["https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%961.png", "https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%962.png"]},
          {title: "易趣百拼", sum: "种类丰富，拼搭灵活，快速实现创意想法", img:["https://dict.cfunworld.com/img/cfweb/product/%E9%9D%9E%E7%BC%963.png"]}
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
    font: bold 50px/100px $fontF;
    color: $gray100;
  }
  .np-sum {
    font: 30px/50px $fontF;
    color: $gray100;
    margin-bottom: 30px;
  }
  >ul {
    width: 100%;
    >li {
      margin-bottom: 150px;
      .np-img {
        margin-bottom: 30px;
        &:first-of-type {
          width: 500px !important;
        }
        &:last-of-type {
          width: 1400px;
        }
      }
      video {
        width: 1200px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px gray;
      }
    }
  }
}
</style>