<!-- 机器人 -->
<template>
  <div class="robot">
    <ul class="flex-col-center">
      <li class="flex-col-center" v-for="(v, i) in list" :key="i">
        <div class="rb-title">{{v.title}}</div>
        <div class="rb-sum">{{v.sum}}</div>
        <img :src="v.img" alt="">
        <img v-if="i===1" :src="v.img2" alt="">
        <video v-if="i<2" :src="v.vid" :poster="v.post" controls></video>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {title: "轮式机器人", sum: "经典轮式结构，快速组装，编程控制", img: "https://dict.cfunworld.com/img/cfweb/product/%E6%9C%BA%E5%99%A8%E4%BA%BA-10.png", vid: "https://dict.cfunworld.com/img/cfweb/product/HelloCar%E5%AE%A3%E4%BC%A0.mp4", post: "https://dict.cfunworld.com/img/cfweb/product/hellocar%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.jpg"},
          {title: "智能机器人", sum: "百变形态，拓展丰富，对口多项赛事活动", img: "https://dict.cfunworld.com/img/cfweb/product/%E6%9C%BA%E5%99%A8%E4%BA%BA-13.png", img2: "https://dict.cfunworld.com/img/cfweb/product/%E6%9C%BA%E5%99%A8%E4%BA%BA-12.png", vid: "https://dict.cfunworld.com/img/cfweb/product/%E6%99%BA%E6%85%A7%E7%A4%BE%E5%8C%BA2022%E8%A7%84%E5%88%99%E8%A7%86%E9%A2%91.mp4", post: "https://dict.cfunworld.com/img/cfweb/product/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AB%9E%E8%B5%9B%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.jpg"},
          {title: "金属机器人", sum: "铝合金构件，表面平滑，性能强劲", img: "https://dict.cfunworld.com/img/cfweb/product/%E6%9C%BA%E5%99%A8%E4%BA%BA-11.png"},
        ]
      };
    },
    components: {},
  }
</script>

<style scoped lang="scss">
.robot {
  >ul {
    margin-top: 100px;
    >li {
      margin-bottom: 150px;
      .rb-title {
        font: bold 40px/100px $fontF;
        color: $gray100;
      }
      .rb-sum {
        font: 30px/50px $fontF;
        color: $gray100;
        margin-bottom: 30px;
      }
      img {
        width: 1200px;
        margin-bottom: 10px;
      }
      video {
        width: 1200px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px gray;
        // border: 2px solid $gray50;
      } 
    }
  }
}
</style>