<!-- product-software -->
<template>
  <div class="software flex-col-center">
    <div class="download flex-col-center">
      <div class="flex-center">
        <div class="logo"></div>
        <div class="logotxt">编程星空</div>
      </div>
      <!-- <div class="slogan">一个能让创意变为现实的编程软件</div> -->
      <div class="dl" @mouseenter="isDlHover=true" @mouseout="isDlHover=false" @click="openDl">
        <span v-if="!isDlHover">下载离线客户端</span>
        <div class="flex-center" v-else> 
          <svg class="win" t="1667874426262" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2651" width="200" height="200"><path d="M462.3 487.1V122.9L64.5 185.5v301.6zM512 536.9v372l447.5 70.5V536.9zM512 487.1h447.5V44.6L512 115zM462.3 536.9H64.5v301.6l397.8 62.6z" p-id="2652"></path></svg>  
          <span>win7及以上 64位</span>
        </div>
      </div>
      <a href="https://drive.weixin.qq.com/s?k=ANgAgQejAFQ8wmv8OD" target="_blank">系统不支持？获取兼容版软件AS-Block</a>
    </div>
    <ul class="soft-intro flex-col-center">
      <li class="flex-col-center" v-for="(v, i) in intro" :key="i">
        <div class="intro-title">{{v.title}}</div>
        <div class="intro-sum">{{v.sum}}</div>
        <img :src="v.img" alt="">
        <!-- <div class="intro-img"></div> -->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isDlHover: false,
        intro: [
          {title: "深入浅出", sum: "图形化与代码相结合，优化传统编程学习途径", img: "https://dict.cfunworld.com/img/cfweb/product/psoftware0.png"},
          {title: "拓展丰富", sum: "支持海量硬件模块拓展，满足人工智能、物联网等进阶应用", img: "https://dict.cfunworld.com/img/cfweb/product/psoftware1.png"}
        ]
      };
    },
    methods: {
      openDl () {
        window.open("https://drive.weixin.qq.com/s?k=ANgAgQejAFQs58EpZu")
      }
    },
    components: {},
  }
</script>

<style scoped lang="scss">
.software {
  margin-top: 30px;
  width: 100%;
  .download {
    margin: 30px 0 100px;
    >div {
      &:first-of-type {
        $logoH: 220px;
        width: 600px;
        height: $logoH;
        .logo {
          width: $logoH;
          height: 100%;
          background: url("https://dict.cfunworld.com/img/public/aicodestarlogo426.jpg") center/cover no-repeat;
        }
        .logotxt {
          margin-left: 30px;
          line-height: $logoH;
          font: bold 35px $fontF;
          background: linear-gradient(to right top, rgb(217, 21, 102), rgb(8, 198, 250));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      &.dl {
        margin-top: 30px;
        width: 300px;
        font: bold 20px/50px $fontF;
        background-color: var(--rFontColorA);
        border-radius: 5px;
        text-align: center;
        color: rgb(250,250,250);
        cursor: pointer;
        box-shadow: 1px 1px 1px 1px gray;
        &:hover {
          background-color: var(--rFontColor);
          box-shadow:  inset 1px 1px 1px 1px rgb(91, 101, 119);
        }
        >div {
          font-size: 17px;
          .win {
            display: inline-block;
            width: 30px;
            height: 30px;
            fill: white;
            margin-right: 10px;
          }
        }
      }
    }
    >a {
      display: block;
      margin-top: 20px;
      font: 14px/20px $fontF;
      color: $gray150;
      &:hover {
        color: $rFontColor;
        text-decoration: underline;
      }
    }
  }
  .soft-intro {
    // height: 435px;
    // background-color: olive;
    >li {
      margin-bottom: 100px;
      .intro-title {
        font: bold 35px/50px $fontF;
        color: $gray100;
      }
      .intro-sum {
        font: 19px/60px $fontF;
        color: $gray100;
      }
      img {
        width: 1200px;
        display: block;
      }
      // .intro-img {
      //   background: center/c;
      // }
    }
  }
}
</style>