<template>
  <div id="navbar">
    <div>
      <div id="logo" :style="logoStyle" @click="toHome"></div>
      <!-- 汉堡菜单按钮，仅移动端显示 -->
      <div
        class="hamburger-menu"
        v-if="isMobile"
        @click="onHamburgerClick"
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
        case "/cf_starbox":
          this.$router.push({ path: "/product", query: { id: 4 } });
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
      if (!this.isMobile) {
        this.$emit('toggle-menu', false); // 自动关闭菜单
      }
    },
    onHamburgerClick() {
      console.log('Hamburger menu clicked');
      this.$emit('toggle-menu');
    }
  },
  mounted() {
  this.checkMobile();
  window.addEventListener("resize", this.checkMobile);
  console.log('navbarList:', this.navbarList);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  }
};
</script>

<style scoped lang="scss">
@import url("./navbar.scss");
</style>