<template>
  <div id="navbar">
    <div>
      <div id="logo" :style="logoStyle" @click="toHome"></div>
      <!-- 汉堡菜单按钮，仅移动端显示 -->
      <div
        class="hamburger-menu"
        v-if="isMobile"
        @click="$emit('toggle-menu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- PC端始终显示菜单，移动端由isMenuOpen控制 -->
      <div id="nav" v-show="!isMobile || isMenuOpen">
        <ul id="navMenu">
          <li
            v-for="item in navbarList"
            :key="item.id"
            @mouseover="!isMobile && (actTitleId=item.id)"
            @mouseleave="!isMobile && titleMouseLeave(item)"
          >
            <span
              @click="toPage1(item.val.eng, item.id)"
              :class="{ titleHover: actTitleId === item.id }"
              >{{ item.val.title }}</span
            >
            <div
              id="navCMenu1"
              v-if="actTitleId === item.id && item.clist && item.id === 1"
              @mouseleave="actTitleId = -1"
            >
              <ul class="hor">
                <li
                  v-for="(c, i) in item.clist"
                  :key="i"
                  @click="toProduct(c.path, i)"
                >
                  <span>{{ c.ctitle }}</span>
                  <div :style="{ backgroundImage: `url(${c.img})` }"></div>
                </li>
              </ul>
            </div>
            <div
              v-else-if="actTitleId === item.id && item.clist"
              id="navCMenu2"
            >
              <ul class="ver">
                <li
                  v-for="(c, i) in item.clist"
                  :key="i"
                  @click="toPage2(c.path, i)"
                >
                  <span>{{ c.ctitle }}</span>
                  <span v-if="c.ctag" class="ctag">{{ c.ctag }}</span>
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
  data() {
    return {
      actTitleId: -1,
      isMobile: false
    };
  },
  props: {
    navbarList: Array,
    fontColor: String,
    logoStyle: Object,
    navCMenuBgc: String,
    navStyleFlag: Number,
    isMenuOpen: { type: Boolean, default: false }
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toPage1(path, k) {
      if (!(k === 1 || k === 6 || k === 5)) this.$router.push(path);
    },
    toPage2(path, k) {
      switch (path) {
        case "/support/mall":
          window.open(
            "https://cfunworld.taobao.com/category.htm?spm=a1z10.5-c.w4010-6544316521.2.5832602fxUYF1K&search=y"
          );
          break;
        case "/kits":
          window.open(`https://dict.cfunworld.com/tutorial/cfdsx/`);
          break;
        case "/ipyb":
          window.open(`https://dict.cfunworld.com/tutorial/cfipyb/index.html`);
          break;
        case "/hellocar":
          window.open(
            `https://dict.cfunworld.com/tutorial/hellocardoc/index.html`
          );
          break;
        case "/support/download":
          window.open(
            `https://dict.cfunworld.com/download?${new Date().getTime()}`,
            "_blank"
          );
          break;
        default:
          this.$router.push(path);
      }
    },
    toProduct(path, id) {
      this.$router.push({ path, query: { id } });
    },
    titleMouseLeave(item) {
      if (!item.clist) {
        this.actTitleId = -1;
      }
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  }
};
</script>

<style scoped lang="scss">
#navbar {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  background: transparent;

  &:hover {
    background-color: white;
    box-shadow: 1px 0 1px 1px ghostwhite;
    color: rgb(100, 100, 100);
  }

  > div {
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

    #navMenu {
      display: flex;
      > li {
        min-width: 90px;
        font: bold 1.3rem/55px "Microsoft YaHei";
        text-align: center;
        margin-left: 4rem;
        cursor: pointer;
      }
    }
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

  #navCMenu2 {
    margin-top: 0.5rem;
    background-color: white;
    font: 1.1rem/2.6rem "Microsoft YaHei";
    color: rgb(150, 150, 150);
    border-radius: 0 0 5px 5px;
  }

  .hor {
    display: flex;
    width: 80%;
    height: 200px;

    > li {
      flex: auto;
      height: 200px;
      border-left: 1px solid gainsboro;
      box-sizing: border-box;
      color: rgb(150, 150, 150);

      &:hover {
        color: var(--mainColor);
      }

      > span {
        text-align: left;
        text-indent: 15px;
        display: block;
        height: 40px;
        font: bold 20px/40px "Microsoft YaHei";
        border-left: 1px solid var(--mainColor);
        box-sizing: border-box;
      }
      > div {
        height: 90%;
        width: 100%;
        background: center/contain no-repeat;
      }
    }
  }

  .ver {
    > li {
      box-sizing: border-box;
      min-height: 30px;
      border-top: 1px solid var(--rFontColorAA);
      padding: 0 10px;
      white-space: nowrap !important;

      &:hover {
        color: var(--mainColor);
      }

      > span {
        width: 100%;
        text-align: center;
      }
    }
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

  .hamburger-menu {
    display: none;
  }

  @media (max-width: 768px) {
    height: 60px !important;
    background: #23b1e6 !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 0;
    padding: 0;

    > div {
      width: 100vw !important;
      height: 60px !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      flex-wrap: nowrap;
    }

    #logo {
      width: 92px !important;
      height: 36px !important;
      margin: 0;
      float: none;
    }

    .hamburger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 28px;
      height: 22px;
      cursor: pointer;

      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: white;
        border-radius: 2px;
      }
    }

    #nav {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100vw;
      height: auto;
      background: #23b1e6;
      float: none;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
      z-index: 999 !important;
    }

    #navMenu {
      flex-direction: column;
      width: 100vw;
      padding: 0;
      margin: 0;
      > li {
        width: 100vw !important;
        font-size: 1.05rem !important;
        line-height: 3rem !important;
        margin: 0 !important;
        text-align: center;
        color: #fff !important;
        font-weight: 500;
        border-bottom: 1px solid rgba(255, 255, 255, 0.13);

        &:last-child {
          border-bottom: none;
        }
      }
    }

    #navCMenu1,
    #navCMenu2 {
      position: static !important;
      width: 100vw !important;
      background: #e3f6fd !important;
      border: none;
      box-shadow: none;
      margin: 0;
      padding: 0.5rem 0;
      border-radius: 0;
    }

    .hor,
    .ver {
      flex-direction: column !important;

      > li {
        width: 100vw !important;
        padding: 0.5rem 0;
        border: none !important;
        border-bottom: 1px solid #bfe6f9;
        background: none !important;
        color: #222 !important;
        font-size: 0.98rem !important;
        text-align: center;
      }
    }
  }
}
</style>