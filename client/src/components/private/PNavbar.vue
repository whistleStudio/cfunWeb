<!--  -->
<template>
  <div id="PNavbar" :style="PNavStyle" @mousemove="navStyleFlag=0" @mouseleave="navStyleFlag=1">
    <nav-bar :navbarList="navbarList"  :logoStyle="logoStyle" :navCMenuBgc="PNavStyle.backgroundColor"
    :navStyleFlag="navStyleFlag"></nav-bar>
  </div>
</template>

<script>
  const Navbar = ()=>import("components/common/navBar/Navbar")

  export default {
    data () {
      return {
        navbarList:[
          {id: 0, val: {id: 0, title: "首页", eng: "/home"}},
          {
            id: 1, val: {id: 0, title: "产品", eng: "/product"},
            clist: [
              {ctitle: "教学软件", img: "cl0.png", path: "/product/software"},
              {ctitle: "非编程系列", img: "cl1.png", path: "/product/nonprogram"},
              {ctitle: "编程系列", img: "cl2.png", path: "/product/program"},
              {ctitle: "创意制作系列", img: "cl3.png", path: "/product/creative"},
              {ctitle: "机器人系列", img: "cl4.png", path: "/product/robot"},
              {ctitle: "其他", img: "cl1.png", path: "/product/other"}
            ]
          },
          {id: 2, val: {id: 0, title: "课程", eng: "/course"}},
          {id: 3, val: {id: 0, title: "赛事活动", eng: "/activity"}},
          {id: 4, val: {id: 0, title: "技术文档", eng: "/documents"}},
          {id: 5, val: {id: 0, title: "解决方案", eng: "/solution"}},
          {id: 6, val: {id: 0, title: "服务支持", eng: "/help"}}
        ],
        navStyleFlag: 1,
      };
    },
    components: {
      "nav-bar": Navbar
    },
    props: {
      // navStyleFlag: Number
    },
    computed:{
      PNavStyle () {
        if (this.navStyleFlag ) {
          return {backgroundColor: "none", color: "white", boxShadow: "none"}
        } else {
          return {backgroundColor: "none", color: "black", boxShadow: "none"}
        }
      },
      logoStyle () {
        if (this.navStyleFlag ) {
          return {backgroundImage: `url(${require("assets/img/cflogo3.png")})`}
        } else {
          return {backgroundImage: `url(${require("assets/img/cflogo2.png")})`}
        }
      }
    },
    methods: {
      changeStyle () {
        
      }
    }
  }
</script>

<style lang='css' scoped>
  #PNavbar {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    z-index: 9;
  }
</style>