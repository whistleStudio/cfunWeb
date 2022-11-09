<!-- 编程系列 -->
<template>
  <div class="program">
    <ul class="flex-col-center">
      <li class="flex-col-center" v-for="(v, i) in list" :key="i">
        <div class="p-title">{{v.title}}</div>
        <div class="p-sum">{{v.sum}}</div>
        <img :src="v.img" alt="">
        <img v-if="i===1" :src="v.img2" alt="">
        <video v-if="i!==1" :src="v.vid" :poster="v.psot" controls></video>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {title: "集成学习板", sum: "传感控制多合一，适配校本课程，大班化教育首选", img: "https://dict.cfunworld.com/img/cfweb/product/%E7%BC%96%E7%A8%8B-06.png", vid: "https://dict.cfunworld.com/img/cfweb/product/%E6%B5%8B%E6%8E%A7%E7%89%88%E6%BC%94%E7%A4%BA.mp4", post: "https://dict.cfunworld.com/img/cfweb/product/%E6%B5%8B%E6%8E%A7%E7%89%88%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.jpg"},
          {title: "电子模块套件", sum: "种类丰富，接线便捷，结构兼容乐高积木", img: "https://dict.cfunworld.com/img/cfweb/product/%E7%BC%96%E7%A8%8B-07.png", img2: "https://dict.cfunworld.com/img/cfweb/product/%E7%BC%96%E7%A8%8B-08.png"},
          {title: "创新套件", sum: "聚焦智能生活，更多创新模块，让创意无限放大", img: "https://dict.cfunworld.com/img/cfweb/product/%E7%BC%96%E7%A8%8B-09.png", vid: "https://dict.cfunworld.com/img/cfweb/product/A%E7%89%A9%E8%81%94%E7%BD%91%2B%E6%97%A0%E7%BA%BF.mp4", post: "https://dict.cfunworld.com/img/cfweb/product/%E7%89%A9%E8%81%94%E7%BD%91%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.jpg"}
        ]
      };
    },
    components: {},
  }
</script>

<style scoped lang="scss">
.program {
  >ul {
    margin-top: 100px;
    >li {
      margin-bottom: 150px;
      .p-title {
        font: bold 40px/100px $fontF;
        color: $gray100;
      }
      .p-sum {
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
      } 
    }
  }
}
</style>