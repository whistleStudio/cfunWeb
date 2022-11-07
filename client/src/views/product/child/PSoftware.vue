<!-- product-software -->
<template>
  <div class="software flex-col-center">
    <div class="download flex-col-center">
      <div class="flex-center">
        <div class="logo"></div>
        <div class="logotxt">编程星空</div>
      </div>
      <!-- <div class="slogan">一个能让创意变为现实的编程软件</div> -->
      <div class="dl">下载离线客户端</div>
      <a href="">系统不支持？获取兼容版软件AS-Block</a>
    </div>
    <div class="soft-intro">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    components: {},
  }
</script>

<style scoped lang="scss">

$fontF: "Microsoft YaHei", "微软雅黑";
.software {
  margin-top: 30px;
  width: 100%;
  .download {
    margin: 50px 0;
    >div {
      &:first-of-type {
        
        width: 600px;
        height: 250px;
        .logo {
          width: 250px;
          height: 100%;
          background: url("https://dict.cfunworld.com/img/public/aicodestarlogo426.jpg") center/cover no-repeat;
        }
        .logotxt {
          margin-left: 30px;
          font: bold 35px/250px $fontF;
          background: linear-gradient(to right top, rgb(217, 21, 102), rgb(8, 198, 250));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      &:last-of-type {
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
      }
      >a {
        display: block;
        margin-top: 20px;
        font: 12px/20px $fontF;;
      }
    }
  }
  .soft-intro {
    height: 435px;
    // background-color: olive;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      &:first-of-type {
        width: 800px;
        height: 435px;
        border-radius: 10px;
        background: url('https://dict.cfunworld.com/img/cfweb/product/psoftware0.png') center/contain no-repeat;
      }
    }
  }
}
</style>