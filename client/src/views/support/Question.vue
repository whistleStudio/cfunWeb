<!-- support/question -->
<template>
  <div id="question">
    <div class="topBanner"></div>
    <div id="que">
      <div id="search">
        <h2>常见问题</h2>
        <div>
          <input ref="searchIp" @focus="inputSearchFocus" v-model="keyword" 
          type="text" placeholder="请输入要搜索的内容"> 
          <div @click="reqSearchQue"></div> 
        </div>
      </div>
      <div id="more">
        <ul>
          <li v-for="(v, i) in qs" :key="i" :class="{cateHover:actCate===i}"
          @mouseenter="actCate=i">{{v}}</li>
        </ul>
        <div id="common">
          <ul>
            <li v-for="(v, i) in hotQs[actCate]" :key="i"
            @click="toPage({pageMode:1, actCate, qTitle:v.title})"
            >· {{v.title}}</li>
          </ul>
          <div @mouseenter="wantMore=1" @mouseleave="wantMore=0" @click="toPage({pageMode:0, actCate})">
            <span :class="{spanBlue: wantMore}">查看更多</span>
            <div><div id="line" :class="{toBlue: wantMore}"></div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="service">
      <h2>联系客服</h2>
      <ul>
        <li v-for="(v ,i) in service" :key="i" @mouseenter="v.k=0" @mouseleave="v.k=1">
          <div v-show="v.k" class="text">
            <img :src="require(`img/support/${v.img1}`)" alt="">
            <span>{{v.way}}</span>
          </div>
          <div v-show="!v.k" :style="{backgroundImage: `url(${require('img/support/'+v.img2)})`}" class="code">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {qs} from "./qs.json"
export default {
  data () {
    return {
      qs,
      service: [
        {k:1, way: "微信客服", img1: "wechat.png", img2: "wecode.jpg"},
        {k:1, way: "QQ技术交流群", img1: "qq.png", img2: "qqcode.png"}
      ],
      actCate: 0, wantMore: 0,
      keyword: "", hotQs: Array(6).fill(0).map(e => [])
    }
  },
  methods: {
    toPage ({pageMode, actCate, qTitle, searchList, keyword}) {
      // pageMode 0-列表展示, 1-列表解答, 2-搜索展示, 3-搜索解答, 4没找到
      switch (pageMode) {
        case 0:
          this.$router.push({name: "measures", params: {pageMode, actCate}})
          break;
        case 1:
          this.$router.push({name:'measures', params: {pageMode, actCate, qTitle}})
          break;
        default:
          this.$router.push({name:'measures', params: {pageMode, actCate, searchList, keyword}})
          break;
      }  
    },
    /* 关键词搜索 */
    inputSearchFocus () {
      document.onkeydown = ev => {
        if (ev.key === "Enter") {
          this.reqSearchQue()
        }
      }
    },
    reqSearchQue () {
      this.$refs.searchIp.blur()
      if (this.keyword) {
        fetch(`/api/que/searchQue?keyword=${this.keyword}`)
        .then(res => res.json()
        .then(data => {
          if (!data.err) {
            let searchList = data.queList
            if (searchList.length) {
              var pageMode = 2
            } else var pageMode = 4
            this.toPage({pageMode, actCate:0, searchList, keyword:this.keyword})
          } else alert(data.msg)
        }))
      }
    },
    /* 获取热度问题 */
    reqHotQue () {
      fetch(`/api/que/reqHotQue`)
      .then(res => res.json()
      .then(data => {
        if (!data.err) {
          console.log(data.hotQs)
          this.hotQs = data.hotQs
        } else alert(data.msg)
      }))
    }    
  },
  created () {
    this.reqHotQue()
  }
}
</script>

<style scoped src="views/support/question.css"></style>
