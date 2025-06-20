<template>
  <div id="PNavbar" :style="PNavStyle" @mousemove="navStyleFlag=0" @mouseleave="navStyleFlag=1">
    <nav-bar
      :navbarList="navbarList"
      :logoStyle="logoStyle"
      :navCMenuBgc="PNavStyle.backgroundColor"
      :navStyleFlag="navStyleFlag"
      :isMenuOpen="isMenuOpen"
      @toggle-menu="toggleMenu"
    ></nav-bar>
  </div>
</template>

<script>
const Navbar = () => import("components/common/navBar/Navbar")

export default {
  data () {
    return {
      navbarList: [
        {id: 0, val: {id: 0, title: "首页", eng: "/home"}},
        {
          id: 1, val: {id: 0, title: "产品", eng: "/product"},
          clist: [
            {ctitle: "教学软件", img: "https://dict.cfunworld.com/img/cfweb/product/cl0.png", path: "/product"},
            {ctitle: "非编程系列", img: "https://dict.cfunworld.com/img/cfweb/product/cl1.png", path: "/product"},
            {ctitle: "编程系列", img: "https://dict.cfunworld.com/img/cfweb/product/cl2.png", path: "/product"},
            {ctitle: "机器人系列", img: "https://dict.cfunworld.com/img/cfweb/product/cl4.png", path: "/product"},
            {ctitle: "信息科技", img: "https://dict.cfunworld.com/img/cfweb/product/cl6.png", path: "/product"},
            {ctitle: "创意制作", img: "https://dict.cfunworld.com/img/cfweb/product/cl3.png", path: "/product"},
            {ctitle: "创客空间", img: "https://dict.cfunworld.com/img/cfweb/product/cl5.png", path: "/solution"}
          ]
        },
        {id: 2, val: {id: 0, title: "课程", eng: "/course"}},
        {id: 3, val: {id: 0, title: "赛事活动", eng: "/activity"}},
        {id: 4, val: {id: 0, title: "创意工坊", eng: "/creative"}},
        {
          id: 5, val: {id: 0, title: "技术文档", eng: "/documents"},
          clist: [
            {ctitle: "电子模块", path: "/documents"},
            {ctitle: "HelloCar", path: "/hellocar"},
            {ctitle: "智能套装", path: "/kits", ctag: "小学信息科技"},
            {ctitle: "智能实验箱", path: "/ipyb", ctag: "小学/初中信息科技"},
            {ctitle: "创趣星盒", path: "/product?id=4", ctag: "全国多版信息科技"},
          ]
        },
        {
          id: 6, val: {id: 0, title: "服务支持", eng: "/help"},
          clist: [
            {ctitle: "常见问题", path: "/support/question"},
            {ctitle: "在线商城", path: "/support/mall"},
            {ctitle: "软件下载", path: "/support/download"},
            {ctitle: "联系我们", path: "/support/contact"}
          ]
        }
      ],
      navStyleFlag: 1,
      isMenuOpen: false
    };
  },
  components: {
    "nav-bar": Navbar
  },
  computed: {
    PNavStyle () {
      if (this.navStyleFlag) {
        return {backgroundColor: "none", color: "white", boxShadow: "none"}
      } else {
        return {backgroundColor: "none", color: "black", boxShadow: "none"}
      }
    },
    logoStyle () {
      if (this.navStyleFlag) {
        return {backgroundImage: `url(${require("assets/img/cflogo3.png")})`}
      } else {
        return {backgroundImage: `url(${require("assets/img/cflogo2.png")})`}
      }
    },
    isMobilePhone() {
      const ua = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua);
    }
  },
  methods: {
    toggleMenu() {
      console.log("toggleMenu", this.isMenuOpen);
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  mounted () {
    if (this.isMobilePhone) {
      let oNav = document.querySelector("#PNavbar")
      oNav.style.position = "relative"
      oNav.style.backgroundColor = "rgb(0, 160, 232)"
    }
  }
}
</script>

<style lang='scss' scoped>
#PNavbar {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  min-width: 1000px;
  height: 75px;
  z-index: 999;
}

/* 自适应 */
@media (max-width: 768px) {
  #navbar > div,
  #navbar,
  #PNavbar {
    min-width: unset;
    width: 100vw;
    height: auto;
  }
  #logo {
    width: 120px;
    height: 40px;
    float: none;
    margin: 0 auto;
  }
  #nav {
    float: none;
    height: auto;
  }
  #navMenu {
    display: block;
    padding: 0;
  }
  #navMenu > li {
    min-width: unset;
    margin-left: 0;
    font-size: 1rem;
    line-height: 40px;
    text-align: left;
  }
  #navCMenu1, #navCMenu2 {
    position: static;
    width: 100vw !important;
    min-width: unset;
    height: auto;
  }
  .hor, .ver {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
}
</style>