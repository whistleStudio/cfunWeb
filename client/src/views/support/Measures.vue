<!-- support/measures -->
<template>
  <div id="measures">
    <div class="topBanner"></div>
    <div>
      <div id="menu">
        <div class="lhplbs">问题分类</div>
        <ul>
          <li v-for="(v, i) in qs" :key="i" @click="menuLiClick(i)"
          :class="{menuLiAct: actCate===i}"
          class="lhplbs">{{v.cate}}</li>
        </ul>
      </div>
      <div id="main">
        <div id="nav">
          <div id="bread">
            <span>{{qs[actCate].cate}}</span> 
            <div id="navigator">
              <ul>
                <li @click="changePage(-1)" id="liPre" class="pageNum">&lt;</li>
                <li v-for="(v, i) in Array(pageCount)" :key="i" @click="actPage=i" 
                :class="{pageNumAct: actPage===i}"
                class="pageNum">{{i+1}}</li>
                <li @click="changePage(1)" id="liNxt" class="pageNum">&gt;</li>
                <li id="liTo">到 <input type="text" @focus="inputFocus" :value="actPage+1" ref="toP"> 页<span @click="enterPage">确认</span></li>
              </ul>
            </div>
          </div>
          <div id="search">
            <input type="text" placeholder="请输入要搜索的内容">
            <div></div> 
          </div>  
        </div>
        <div id="content">
          <div v-if="searchMode===1">
            <ul id="qList" v-if="showQs.length">
              <li v-for="(v, i) in showQs" :key="i" @click="qListLiClick(v)">
                <span>- {{v.title}}</span>
                <div v-if="v.keyword">
                  <span class="keywordTag" v-for="(kv, ki) in v.keyword.split(' ')" :key="ki">{{kv}}</span>
                </div>     
              </li>
            </ul>
          </div>
          <div id="answer" v-else-if="searchMode===0&&curAnswer.name">
            <iframe :src="`questions/${curAnswer.dir}/${curAnswer.name}/${curAnswer.name}.html`" frameborder="0" ref="ifr"
            width="100%"  height="100%" scrolling="none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {qs} from "./qs.json"
export default {
  data () {
    return {
      qs,
      actCate: 0,
      actPage: 0,
      curQs: new Array(32).fill(0),
      searchMode: 1,
      curAnswer: {
        dir: "",
        name: ""
      }
    }
  },
  computed: {
    pageCount: function () {
      return Math.ceil(this.curQs.length / 15)
    },
    showQs: function () {
      if (this.actPage === this.pageCount-1) {
        return this.curQs.slice(this.actPage*15, this.curQs.length)
      } else return this.curQs.slice(this.actPage*15, (this.actPage+1)*15)
    }
  },
  methods: {
    menuLiClick (i) {
      this.actCate = i
      this.reqQueList(i)
    },
    qListLiClick (v) {
      this.searchMode = 0
      this.curAnswer.dir = qs[v.cate].cate
      this.curAnswer.name = v.title
      console.log(this.curAnswer.dir, this.curAnswer.name)
    },
    changePage (k) {
      let aP = this.actPage
      if (k<0) {
        this.actPage = aP>0 ? aP-1 : aP
      } else {
        this.actPage = aP===this.pageCount-1 ? aP : aP+1
      }
    },
    inputFocus () {
      document.onkeydown = ev=> {
        if (ev.key === "Enter") {
          this.enterPage()
        }
      }
    },
    enterPage () {
      let toP = parseInt(this.$refs.toP.value)
      if (toP>0) {
        this.actPage = toP>=this.pageCount ? this.pageCount-1 : toP-1
        this.$refs.toP.value = this.actPage+1
      } else {
        this.actPage = 0
        this.$refs.toP.value = 1
      }
      this.$refs.toP.blur()      
    },
    reqQueList (i) {
      fetch (`/api/que/getQueList?cate=${i}`)
      .then (res => res.json()
      .then (data => {
        if (!data.err) {
          this.curQs = data.queList
        }
        else alert(data.msg)
      }))
    }
  },
  created () {
    this.reqQueList(0)
  }
}
</script>

<style scoped src="./measure.css"></style>