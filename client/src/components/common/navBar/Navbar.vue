<!-- common navbar -->
<template>
  <div id="navbar">
    <div>
      <div id="logo" :style="logoStyle">
        <!-- <img :src=logoSrc alt="" width="55px" height="55px"> -->
      </div>
      <div id="nav">
        <ul id="navMenu">
          <li v-for="item in navbarList" :key="item.id" 
          @mouseover="actTitleId=item.id">
            <span @click="toPage(item.val[0].eng)">{{item.val[0].title}}</span>
            <ul id="navCMenu" v-if="actTitleId === item.id" :style="{backgroundColor: navCMenuBgc}">
              <li v-for="i in item.val.slice(1)" :key="i.id">{{i.sub}}</li>
            </ul>
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
      actTitleId: -1
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
    toPage (path) {
      this.$router.push(path)
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
  }
  #nav {
    float: right;
    /* background-color: olive; */
    height: 55px;
  }
  #navMenu {
    /* margin-top: 15px; */
    display: flex;
  }
  #navMenu>li {
    font: bold 1.3rem/55px "Microsoft YaHei";
    text-align: center;
    /* width: 100px; */
    margin-left: 60px;
    cursor: pointer;
    /* color: var(--navColor); */
  }
  #navCMenu>li {
    font: 0.8rem/45px "Microsoft YaHei";
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }

  #navMenu>li>span:hover {
    color: var(--mainColor);
    font-weight: bold;
  }
  #navCMenu>li:hover {
    color: var(--mainColor);
    font-weight: bold;
  }
</style>