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
      <!-- PC端始终显示菜单，移动端由isMenuOpen控制  -->
      <div id="nav" v-show="!isMobile || isMenuOpen">
        <ul id="navMenu">
          <li
            v-for="item in navbarList"
            :key="item.id"
            @mouseover="!isMobile && (actTitleId=item.id)"
            @mouseleave="!isMobile && titleMouseLeave(item)"
          >
            <span
              @click="onTitleClick(item)"
              :class="{ titleHover: actTitleId === item.id }"
            >{{ item.val.title }}</span>
            <div
              id="navCMenu1"
              v-if="actTitleId === item.id && item.clist && item.id === 1"
              @mouseleave="actTitleId = -1"
            >
              <ul class="hor">
                <li
                  v-for="(c, i) in item.clist"
                  :key="i"
                  @click="onSubMenuClick(item, c, i)"
                >
                  <span>{{ c.ctitle }}</span>
                  <div :style="{ backgroundImage: `url(${c.img})`}"></div>
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
                  @click="onSubMenuClick(item, c, i)"
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
  watch: {
    isMenuOpen(val) {
      if (this.isMobile && val) {
        document.body.addEventListener('click', this.handleBodyClick, true);
      } else {
        document.body.removeEventListener('click', this.handleBodyClick, true);
      }
    }
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
      this.$emit('toggle-menu');
      this.actTitleId = -1; // 点击汉堡菜单时重置标题ID
    },
    onTitleClick(item) {
      if (this.isMobile) {
        if (item.clist) {
          // 若有二级菜单，则展开/收起
          this.actTitleId = this.actTitleId === item.id ? -1 : item.id;
        } else {
          this.toPage1(item.val.eng, item.id);
          this.$emit('toggle-menu', false);
        }
      } else {
        this.toPage1(item.val.eng, item.id);
      }
    },
    onSubMenuClick(item, c, i) {
      if (item.id === 1) {
        this.toProduct(c.path, i);
      } else {
        this.toPage2(c.path, i);
      }
      if (this.isMobile) {
        this.actTitleId = -1;
        this.$emit('toggle-menu', false);
      }
    },
    handleBodyClick(e) {
      // 如果点击在navbar区域内，不处理
      if (this.$el.contains(e.target)) return;
      // 否则关闭菜单
      this.$emit('toggle-menu', false);
      this.actTitleId = -1;
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
    document.body.removeEventListener('click', this.handleBodyClick, true);
  }
};
</script>

<style scoped lang="scss">
@import url("./navbar.scss");
</style>