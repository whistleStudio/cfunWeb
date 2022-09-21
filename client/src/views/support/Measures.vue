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
          class="lhplbs">{{v}}</li>
        </ul>
      </div>
      <div id="main">
        <div id="nav">
          <div id="bread">
            <span v-if="pageMode<=1 || pageMode==3">{{qs[actCate]}}</span> 
            <span v-else>"{{breadKeyword}}"搜索结果为:</span>
            <div id="navigator">
              <ul v-if="pageMode==0">
                <button @click="changePage(-1)" id="liPre" :disabled="actPage===0" class="pageNum">&lt;</button>
                <li v-for="(v, i) in Array(pageCount)" :key="i" @click="actPage=i" :class="{pageNumAct: actPage===i}" class="pageNum">{{i+1}}</li>
                <button @click="changePage(1)" id="liNxt" :disabled="actPage===pageCount-1||pageCount===0" class="pageNum">&gt;</button>
                <li id="liTo">到 <input type="text" @focus="inputPageFocus" :value="actPage+1" ref="toP"> 页<span @click="enterPage">确认</span></li>
              </ul>
              <ul v-else>
                <li id="backBtn" @click="backPage">返回</li>
              </ul>
            </div>
          </div>
          <div id="search">
            <input ref="searchIp" @focus="inputSearchFocus" type="text" placeholder="请输入要搜索的内容" v-model="keyword">
            <div @click="reqSearchQue"></div> 
          </div>  
        </div>
        <div id="content">
          <!-- 类别列表展示 -->
          <div v-if="pageMode==0">
            <ul class="qList" v-if="showQs.length">
              <li v-for="(v, i) in showQs" :key="i" @click="qListLiClick(v)" class="showQ">
                <span>- {{v.title.replace(/_/g, "，")}}</span>
                <div v-if="v.keyword">
                  <span class="keywordTag" v-for="(kv, ki) in v.keyword.split(' ')" :key="ki">{{kv}}</span>
                </div>     
              </li>
            </ul>
          </div>
          <!-- 类别/搜索列表选择项目 -->
          <div id="answer" v-else-if="(pageMode==1 || pageMode==3)">
            <iframe :src="queSrc" frameborder="0" ref="ifr" width="100%"  height="100%" scrolling="none"></iframe>
            <div v-if="lastEdit" class="last-edit">&lt;Last Edit {{lastEdit}}&gt;</div>
          </div>
          <!-- 搜索列表展示 -->
          <div id="searchResults" v-else-if="pageMode==2">
            <ul class="qList">
              <li v-for="(v, i) in searchList.slice(0,15)" :key="i" @click="qListLiClick(v)" class="showQ">
                <span>- {{v.title}}</span>
                <div v-if="v.keyword">
                  <span class="keywordTag" v-for="(kv, ki) in v.keyword.split(' ')" :key="ki">{{kv}}</span>
                </div> 
              </li>
            </ul>
          </div>
          <!-- 没找到 -->
          <div id="notFound" v-else>
            <div></div>
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
      actCate: 0, actPage: 0, pageMode: 0, //0-列表展示, 1-列表解答, 2-搜索展示, 3-搜索解答, 4没找到
      keyword: "", queSrc: "", queUrl: "https://dict.cfunworld.com/que/", lastEditDate: "",
      curQs: [], searchList: [], 
      qs
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
    },
    breadKeyword: function () {
      return this.keyword.length<5 ? this.keyword : this.keyword.substring(0,5)+"..." 
    },
    lastEdit () {
      let d = this.lastEditDate
      if (d instanceof Date) {
        let m = d.getMonth()+1>9 ? d.getMonth()+1 : "0"+(d.getMonth()+1)
        let dat = d.getDate()>9 ? d.getDate() : "0"+d.getDate()
        return `${d.getFullYear()}-${m}-${dat}`
      } else return ""
    }
  },
  methods: {
    /* 目录点击 */
    menuLiClick (i) {
      this.actCate = i
      this.reqQueList(i)
    },
    /* 展示列表单项点击 */
    qListLiClick (v) {
      if (this.pageMode === 0)
        this.pageMode = 1
      else this.pageMode = 3
      this.actCate = v.cate
      this.lastEditDate = new Date(v.lastEdit)
      // console.log(v.lastEdit, typeof this.lastEditDate)
      let tempQueUrl = `${v.cate}_${this.qs[v.cate]}/${v.title}/${v.title}.html`
      this.queSrc = this.queUrl + tempQueUrl
    },
    /* 具体答案页返回上级列表展示页或搜索页 */
    backPage () {
      if (this.pageMode!==3) {
        this.pageMode = 0
      } else this.pageMode = 2
    },
    /* 导航切换<> */
    changePage (k) {
      let aP = this.actPage
      if (k<0) {
        this.actPage = aP>0 ? aP-1 : aP
      } else {
        this.actPage = aP===this.pageCount-1 ? aP : aP+1
      }
    },
    /* 指定页跳转 */
    inputPageFocus () {
      document.onkeydown = ev=> {
        if (ev.key === "Enter") {
          this.enterPage()
        }
        this.$refs.toP.blur() 
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
    },
    /* 某类列表请求 */
    reqQueList (i) {
      return new Promise((res, rej) => {
        fetch (`/api/que/getQueList?cate=${i}`)
        .then (r => r.json()
        .then (data => {
          if (!data.err) {
            this.curQs = data.queList
            this.pageMode = 0
            res()
          }
          else {
            alert(data.msg)
            rej()
          }
        }))        
      })
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
            this.searchList = data.queList
            if (this.searchList.length) {
              this.pageMode = 2
            } else this.pageMode = 4
          } else alert(data.msg)
        }))
      }
    }
  },
  created () {
    let p = this.$route.params
    console.log(p)
    if (p.actCate!==undefined) {
      ;(async ()=> {
        try {
          await this.reqQueList(p.actCate)
          if (p.pageMode===1) {
            let {actCate, qTitle} = p
            this.pageMode = 1
            this.actCate = actCate
            let tempQueUrl = `${actCate}_${this.qs[actCate]}/${qTitle}/${qTitle}.html`
            this.queSrc = this.queUrl + tempQueUrl

          } else if (p.pageMode>1) {
            this.pageMode = p.pageMode
            this.searchList = p.searchList
            this.keyword = p.keyword
          }
          console.log( this.keyword)
        } catch (e) {console.log(e)}
      })()
    } else this.reqQueList(0)
  }
}
</script>

<style scoped src="./measure.css"></style>