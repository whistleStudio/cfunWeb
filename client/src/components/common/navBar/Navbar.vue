<!-- common navbar -->
<template>
  <div id="navbar" @mouseleave="actTitleId=-1">
    <div>
      <div id="logo" :style="logoStyle" @click="toHome">
      </div>
      <div id="nav">
        <ul id="navMenu">
          <li v-for="item in navbarList" :key="item.id" 
          @mouseover="actTitleId=item.id" @mouseleave="titleMouseLeave(item)">
            <span @click="toPage1(item.val.eng, item.id)" :class="{titleHover: actTitleId===item.id}">{{item.val.title}}</span>
            <div id="navCMenu1" v-if="actTitleId===item.id && item.clist && item.id===1"
            @mouseleave="actTitleId=-1">
              <ul  class="hor">
                <li v-for="(c, i) in item.clist" :key="i" @click="toProduct(c.path, i)">
                  <span>{{c.ctitle}}</span>
                  <div :style="{backgroundImage: `url(${c.img})`}"></div>
                </li>
              </ul>
            </div>
            <div v-else-if="actTitleId===item.id && item.clist" id="navCMenu2">
              <ul class="ver">
                <li v-for="(c, i) in item.clist" :key="i" @click="toPage2(c.path, i)"> <span>{{c.ctitle}}</span></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actTitleId: -1,
    };
  },
  props: {
    navbarList: Array,
    fontColor: String,
    logoStyle: Object,
    navCMenuBgc: String
  },
  components: {},
  computed: {
    // navLiStyle () {
    //   return {"--navColor": this.fontColor}
    // }
  },
  methods: {
    toHome () {
      this.$router.push("/home")
    },
    toPage1 (path, k) {
      if (!(k===1 || k===6)) this.$router.push(path)
    },
    toPage2 (path, k) {
      if (k===1) window.open("https://cfunworld.taobao.com/category.htm?spm=a1z10.5-c.w4010-6544316521.2.5832602fxUYF1K&search=y")
      else this.$router.push(path)
    },
    toProduct (path, id) {
      this.$router.push({path, query:{id}})
    },
    titleMouseLeave (item) {
      if (!item.clist) {
        this.actTitleId = -1
      }
    }
  }
}
</script>

<style lang='css' scoped>
  /* root样式 --rFontColor */
  * {
    --mainColor: var(--rFontColor)
  }
  #navbar {
    width: 100%;
    height: 100%;
    /* background-color: pink; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
  }
  #navbar>div {
    width: 80%;
    height: 55px;
  }
  #logo {
    width: calc(55px * 3.7);
    height: 55px;
    float: left;
    background: center/contain no-repeat;
    cursor: pointer;
  }
  #nav {
    float: right;
    /* background-color: olive; */
    height: 55px;
  }
  #navMenu {
    display: flex;
  }
  #navMenu>li {
    min-width: 90px;
    font: bold 1.3rem/55px "Microsoft YaHei";
    text-align: center;
    margin-left: 4rem;
    cursor: pointer;
  }
  #navCMenu1 {
    position: absolute;
    left: 0;
    top: 75px;
    width: 100vw;
    min-width: 1000px;
    height: 250px;
    background-color: white;
    box-sizing: border-box;
    border-top: 2px solid ghostwhite;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #navCMenu1>.hor {
    display: flex;
    width: 80%;
    height: 200px;
  }
  .hor>li {
    flex: auto;
    height: 200px;
    border-left: 1px solid gainsboro;
    box-sizing: border-box;
    color: rgb(150, 150, 150);
  }
  .hor>li>span {
    text-align: left;
    text-indent: 15px;
    display: block;
    height: 40px;
    font: bold 20px/40px "Microsoft YaHei";
    border-left: 1px solid var(--mainColor);
    box-sizing: border-box;
  }
  .hor>li>div {
    height: 90%;
    width: 100%;
    background: center/contain no-repeat;
  }
  #navCMenu2 {
    margin-top: 0.5rem;
    background-color: white;
    font:  1.1rem/2.6rem "Microsoft YaHei";
    color: rgb(150, 150, 150);
  }
  .ver>li {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    min-height: 30px;
    border-top: 1px solid var(--rFontColorAA);
  }
  .ver>li>span {
    display: block;
    width: 100%;
    text-align: center;
  }

  .titleHover {
    color: var(--mainColor);
    font-weight: bold;
  }
  #navbar:hover {
    background-color: white;
    box-shadow: 1px 0 1px 1px ghostwhite;
    color: rgb(100,100,100)
  }
  .hor>li:hover, .ver>li:hover {
    color: var(--mainColor) ;
  }
</style>