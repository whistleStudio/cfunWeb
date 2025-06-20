<template>
  <div id="navbar" @mouseleave="actTitleId=-1">
    <div>
      <div id="logo" :style="logoStyle" @click="toHome"></div>
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
                <li v-for="(c, i) in item.clist" :key="i" @click="toPage2(c.path, i)"> 
                  <span>{{c.ctitle}}</span> <span v-if="c.ctag" class="ctag">{{ c.ctag }}</span>
                </li>
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
  methods: {
    toHome () {
      this.$router.push("/home")
    },
    toPage1 (path, k) {
      if (!(k===1 || k===6 || k===5)) this.$router.push(path)
    },
    toPage2 (path, k) {
      switch (path) {
        case "/support/mall":
          window.open("https://cfunworld.taobao.com/category.htm?spm=a1z10.5-c.w4010-6544316521.2.5832602fxUYF1K&search=y")
          break
        case "/kits":
          window.open(`https://dict.cfunworld.com/tutorial/cfdsx/`)
          break
        case "/ipyb":
          window.open(`https://dict.cfunworld.com/tutorial/cfipyb/index.html`)
          break
        case "/hellocar":
          window.open(`https://dict.cfunworld.com/tutorial/hellocardoc/index.html`)
          break
        case "/support/download":
          window.open(`https://dict.cfunworld.com/download?${new Date().getTime()}`, "_blank")
          break
        default:
        this.$router.push(path)
      }
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

<style scoped>
/* PC端样式保持原有风格 */
#navbar {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  background: transparent;
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
  border-radius: 0 0 5px 5px;
}
.ver>li {
  box-sizing: border-box;
  min-height: 30px;
  border-top: 1px solid var(--rFontColorAA);
  padding: 0 10px;
  white-space: nowrap !important;
}
.ver>li>span {
  width: 100%;
  text-align: center;
}

.ctag {
  color: white;
  font-size: 12px !important;
  background-color: var(--rFontColorAA);
  border-radius: 3px;
  padding: 5px;
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

/* ========== 移动端美观自适应 ========== */
@media (max-width: 768px) {
  #navbar, #navbar>div {
    min-width: 0 !important;
    width: 100vw !important;
    height: auto !important;
    background: #23b1e6 !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border-radius: 0 0 10px 10px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #logo {
    width: 92px !important;
    height: 36px !important;
    margin: 12px auto 8px auto;
    float: none;
    background-size: contain !important;
    background-position: center !important;
    display: block;
  }
  #nav {
    float: none;
    width: 100vw !important;
    height: auto;
    margin: 0 auto;
    background: none !important;
    box-shadow: none;
  }
  #navMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0;
    margin: 0;
    background: none;
  }
  #navMenu>li {
    min-width: 0 !important;
    width: 100vw !important;
    font-size: 1.05rem !important;
    line-height: 2.5rem !important;
    margin-left: 0 !important;
    margin-bottom: 0.1rem;
    text-align: center;
    color: #fff !important;
    background: none !important;
    font-weight: 500;
    border-radius: 0;
    transition: background 0.2s;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(255,255,255,0.13);
  }
  #navMenu>li:last-child {
    border-bottom: none;
  }
  #navMenu>li:hover, #navMenu>li .titleHover {
    color: #fff;
    background: rgba(0,0,0,0.04);
  }
  #navCMenu1, #navCMenu2 {
    position: static !important;
    width: 100vw !important;
    min-width: 0 !important;
    height: auto !important;
    background: #e3f6fd !important;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0.5rem 0;
    border-radius: 0;
    z-index: 99;
  }
  .hor, .ver {
    flex-direction: column !important;
    width: 100vw !important;
    height: auto !important;
  }
  .hor>li, .ver>li {
    width: 100vw !important;
    padding: 0.5rem 0;
    border: none !important;
    border-bottom: 1px solid #bfe6f9;
    background: none !important;
    color: #222 !important;
    font-size: .98rem !important;
    text-align: center;
  }
  .hor>li:last-child, .ver>li:last-child {
    border-bottom: none;
  }
  .hor>li>span, .ver>li>span {
    text-align: center;
    border: none !important;
    font-size: 1.01rem !important;
    padding: 0 !important;
  }
  .ctag {
    font-size: 11px !important;
    padding: 3px 6px;
    margin-left: 0.3rem;
  }
}
</style>