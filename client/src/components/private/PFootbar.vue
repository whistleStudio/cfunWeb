<!-- contact -->
<template>
  <div id="contact">
    <div>
      <div id="info">
        <img :src="logoSrc" alt="创趣天地">
        <div v-for="i in infoData" :key="i.id" v-if="!isMobile">
          <div :style="{backgroundImage: i.img}"></div>
          <span>{{i.text}}</span>
        </div>
      </div>
      <div id="cate" v-if="!isMobile">
        <ul v-for="c in cateData" :key="c.id">
          <li>{{c.head}}</li>
          <li v-for="i in c.item" :key="i.id">{{i.v}}</li>
        </ul>       
      </div>
      <div id="qrcode">
        <ul v-if="!isMobile">
          <li v-for="icon in qrImg.slice(0,qrImg.length-1)" :key="icon.id" 
          :style="{backgroundImage: icon.link}"></li>
        </ul>
        <img :src="qrImg[qrImg.length-1].link" alt="">
        <div>关注创趣天地微信公众号</div>        
      </div>
    </div>
    <div id="ICP">
      <span>版权所有 | 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备16027955号-1</a></span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isMobile: window.innerWidth < 768,
        logoSrc: require("img/cflogo3.png"),
        infoData: [
          {id:0, img:`url(${require("img/footbar/contactIcon0.png")})`, text:"400-8231-300"},
          {id:1, img:`url(${require("img/footbar/contactIcon1.png")})`, text:"172923446@qq.com"},
          {id:2, img:`url(${require("img/footbar/contactIcon2.png")})`, text:"江苏省南京市鼓楼区世贸中心大厦A2座16楼"},
        ],
        cateData:[
          {id:0, head:"产品中心", item:[
            {id:0, v:"教学软件"}, {id:1, v:"非编程系列"}, {id:2, v:"编程系列"}, {id:3, v:"创意制作系列"}, {id:4, v:"机器人系列"}
          ]},
          {id:1, head:"课程案例", item:[
            {id:0, v:"电子书籍"}, {id:1, v:"教学视频"}
          ]},
          {id:2, head:"解决方案", item:[
            {id:0, v:"创客空间建立"}, {id:1, v:"区域教研合作"}
          ]},
          {id:3, head:"服务支持", item:[
            {id:0, v:"常见问题"}, {id:1, v:"在线商城"}, {id:2, v:"联系我们"}
          ]}
        ],
        qrImg: [
          {id:0, link: `url(${require("img/footbar/qr0.png")})`},
          {id:1, link: `url(${require("img/footbar/qr1.png")})`},
          {id:2, link: `url(${require("img/footbar/qr2.png")})`},
          {id:3, link: require("img/footbar/qr3.jpg")}
        ]
      };
    },
    methods: {
      // 监听窗口大小变化
      handleResize() {
        this.isMobile = window.innerWidth < 768;
      }
    },
    mounted() {
      // 添加窗口大小变化的监听器
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      // 移除监听器，避免内存泄漏
      window.removeEventListener('resize', this.handleResize);
    }
  }
</script>

<style lang='scss' scoped>
  * {
    /* 需要root样式--rFontColor */
    --mainColor: var(--rFontColor);
    --fontColor: rgba(255, 255, 255, 0.7);
  }
  #contact {
    width: 100%;
    min-width: 1000px;
    height: 450px;
    background-color: var(--mainColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fontColor);
    padding-top: 2rem;
  }
  #contact>div {
    width: 80%;
    display: flex;
  }
  #info {
    padding-top: 1.5rem;
    height: 90%;
    flex: 3;
    /* background-color: yellow; */
  }
  #info>img {
    width: 40%;
  }
  #info>div {
    margin-top: 1.5rem;
  }
  #info>div>div {
    display: inline-block;
    width: 3.5vh;
    height: 3.5vh;
    background: rgba(255, 255, 255, 0.2) center/60% 60% no-repeat;
    opacity: 0.8;
    border-radius: 50%;
    margin-right: 1rem;
  }
  #info>div>span {
    display: inline-block;
    height: 3.5vh;
    vertical-align: top;
    line-height: 3.5vh;
  }
  #cate {
    height: 90%;
    flex: 5;
    margin-top: 1rem;
    /* background-color: orange; */
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
  }
  #cate>ul {
    margin-right: 2rem;
  }
  #cate>ul>li {
    min-width: 100px;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  #cate>ul>li:first-child {
    margin-top: 3rem;
    color: white;
    font-size: 1rem;
  }
  #qrcode {
    height: 90%;
    flex: 2;
    /* background-color: pink; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #qrcode>ul {
    /* background-color: green; */
    display: flex;
    justify-content: center;
  }
  #qrcode li {
    width: 3.5vh;
    height: 3.5vh;
    background: rgba(255, 255, 255, 0.2) center/60% 60% no-repeat;
    border-radius: 50%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  #qrcode>img {
    margin-top: 1rem;
    width: 60%;
  }
  #qrcode>div {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
  #ICP {
    margin-top: 2rem;
    box-sizing: border-box;
    /* border-top: 1px solid rgba(255, 255, 255, 0.2); */
    width: 100% !important;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    padding: 1rem;
    align-items: center;
  }
  #ICP>span {
    margin: 0 auto;
  }
  #ICP a {
    text-decoration: none;
    color: var(--fontColor);
  }
  #ICP a:hover {
    text-decoration: underline;
  }

/* 在<style scoped>最后追加 */
  @media (max-width: 768px) {
    #contact {
      min-width: 0 !important;
      width: 100vw !important;
      height: auto;
      padding-top: 1rem;
    }
    #contact > div {
      flex-direction: column;
      width: 100%;
      align-items: center; /* 让 flex item (info, cate, qrcode) 自身居中 */
    }
    #info, #cate, #qrcode {
      width: 100% !important;
      flex: unset;
      padding: 0.5rem 1rem;
      margin: 0;
      border: none;
      text-align: center; /* 让容器内部的文字居中 */
      display: flex;
      flex-direction: column;
      align-items: center; /* 确保图片等块级元素也居中 */
      font-size: 0.7rem; /* 调整字体大小 */
    }
    #cate {
      align-items: center; /* 覆盖之前的 align-items: flex-start */
    }
    #ICP {
      font-size: 0.5rem;
      padding: 0.5rem;
      text-align: center;
    }
  }
</style>