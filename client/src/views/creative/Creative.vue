<!-- creative -->
<template>
  <div class="creative">
    <div :style="{backgroundImage: `url(${bannerUrl})`}" class="topBanner"></div>
    <div class="detail" v-if="showMode">
      <span></span>
      <div>
        <iframe :src="actLink" frameborder="0"></iframe>
      </div>
    </div>
    <item-show2 v-else :_pData="pData" :_actCateIdx="actCateIdx" @showCrea="showCrea"></item-show2>
  </div>
</template>

<script>
import ItemShow2 from "components/common/ItemShow2/ItemShow2"

export default {
  data () {
    return {
      bannerUrl: "https://dict.cfunworld.com/img/cfweb/creative/header.jpg",
      pData: [],
      actCateIdx: -1, //组件item-show2里有用，用不到其实
      actLink: "",
      showMode: 0 //0-普通 1-详情页
    };
  },
  components: {
    "item-show2": ItemShow2
  },
  methods: {
    /* 获取页面数据 0首次 1普通*/
    getPageData (pageSkip=0, mode=1, pageNum=9) {
      // fetch(`/api/creative/pageData?pageSkip=${pageSkip}&mode=${mode}&pageNum=${pageNum}`)
      fetch(`/api/creative/creData`)
      .then(res => res.json()
      .then(data => {
        if (!data.err) {
          console.log(data.creData)
          this.pData = data.creData
        } else alert("数据请求失败")
      }))
    },
    /* 展示详情 */
    showCrea ({sub, link}) {
      console.log(sub ,"---",link)
      this.actLink = link
      sessionStorage.setItem("creLink", link) 
      this.$router.push({path: "/creative", query: {sub}})
      this.showMode = 1
    }
  },
  created () {
    this.getPageData()
    console.log(this.$route.query.sub)
    if (this.$route.query.sub) {
      this.showMode = 1
      const link = sessionStorage.getItem("creLink")
      if (link) this.actLink = link
    }
  },
  watch: {
    $route (newV, oldV) {
      console.log(oldV)
      if (oldV.query.sub) {
        this.$router.go(0)
      }
    }
  }
}
</script>

<style scoped>
.creative {
  background-color: rgb(250,250,250);
  /* padding-bottom: 2rem; */
  /* display: flex; */
  /* flex-direction: column; */
}
.creative::-webkit-scrollbar {
  width: 0;
}
.topBanner {
  width: 100%;
  height: 150px;
  background: center/cover no-repeat;
}
.detail {
  width: calc(100vw);
  height: calc(100vh - 155px);
  margin: 0 auto;
}
.detail iframe {
  width: 100%;
  height: calc(100vh - 155px);
}
</style>