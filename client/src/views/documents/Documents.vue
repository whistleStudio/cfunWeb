<!-- documents -->
<template>
  <div id="documents" v-if="docSrc">
    <div id="directory">
      <div id="search">
        <img :src="require('img/cflogo2.png')" alt="创趣天地" @click="$router.push('/')">
        <input v-model="keyword" @focus="keySearch" ref="sear"
        type="search" placeholder="关键词搜索">
      </div>
      <div id="doc-tree">
        <ul>
          <li v-for="(dv, di) in docMap" :key="di">
            <span @click="dirClick(di)" :class="{'dir-type-active': actDir===di, 'dir-type': actDir!==di}">{{dv.name}}</span>
            <ul v-show="actDir===di">
              <li v-for="(fv, fi) in dv.item" :key="fi" @click="fileClick(di, fi, fv)"
              class="doc-type">{{fv}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="main">
      <div id="main-head">
        <div id="bread-nav"><a @click="toHome">首页</a> <span>{{breadNav}}</span></div>
        <a href="https://cfunworld.taobao.com/category.htm?spm=a1z10.5-c.w4010-6544316521.2.5832602fxUYF1K&search=y" target="_blank"><div id="shopcar"></div></a>  
      </div>
      <div id="main-content">
        <iframe ref="ifr" class="main-iframe" v-if="!searchSta" :src="docSrc" frameborder="0"></iframe>
        <div v-else-if="searchSta===1">
          <p id="res-p"><span>查询结果</span><span>与关键词匹配的主题有:</span></p>
          <ul id="res-ul">
            <li v-for="(v, i) in searchList" :key="i" 
            @click="searchLiClick(v)" class="res-li">{{v.title}}</li>
          </ul>
        </div>
        <div v-else id="notfound"></div>
      </div>
    </div>
    <div @click="toTop" id='to-top'></div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        actDir: -1,  breadNav: "", 
        keyword: "", searchList: [], searchSta: 0, docMap:[], indexDocSrc:"", docSrc:"",
        docUrl: "https://dict.cfunworld.com/doc/",
      };
    },
    computed: {
      isMobilePhone() {
        const ua = navigator.userAgent.toLowerCase();
        const t1 = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua);
        return t1 ;
      }
    },
    methods: {
      /* 点击面包屑首页 */
      toHome () {
        this.breadNav = ''
        this.actDir = -1
        this.docSrc = this.indexDocSrc
        this.searchSta = 0
      },
      /* 展开/折叠大分类 */
      dirClick (di) {
        if (this.actDir===di) {
          this.actDir = -1
        } else this.actDir = di
      },
      /* 请求文档 */
      fileClick (di, fi, fv) {
        let fileUrl = `${di}_${this.docMap[di].name}/${to2Num(fi)}_${fv}/${fv}.html`
        this.docSrc = this.docUrl + fileUrl
        this.breadNav = `\\${this.docMap[di].name} \\${fv}`
        this.searchSta = 0
      },
      /* 点击搜索列表，请求文档 */
      searchLiClick (v) {
        let di = v.cate, fi = v.item, fv = v.title
        let fileUrl = `${di}_${this.docMap[di].name}/${to2Num(fi)}_${fv}/${fv}.html`
        this.docSrc = this.docUrl + fileUrl
        this.breadNav = `\\${this.docMap[di].name} \\${fv}`
        this.searchSta = 0
      },
      /* 关键词搜索 */
      keySearch () {
        this.searchList = []
        document.onkeydown = ev => {
          if (ev.key === "Enter") {
            if (this.keyword) {
              this.breadNav = "\\搜索"
              fetch(`/api/doc/kwSearch?kw=${this.keyword}`)
              .then(res => res.json()
              .then(data => {
                if (!data.err) {
                  this.searchList = data.searchList
                  this.searchSta = 1
                  console.log(this.searchList.length)
                } else if(data.err = 1) this.searchSta = -1
                else alert("请求数据失败")
              }))
            }
            this.$refs.sear.blur()
            
          }
        }
      },
      /* 回到文档顶部 */
      toTop () {
        this.$refs.ifr.contentWindow.postMessage("scrollTop", 'https://dict.cfunworld.com')
      },
    },
    created() {
      if (this.isMobilePhone) window.location="https://dictwx.cfunworld.com"
      console.log(this.isMobilePhone)
      // this.docSrc = this.indexDocSrc
      fetch(`/api/doc/getCate?mode=1`)
      .then(res => res.json()
      .then(data => {
        this.indexDocSrc = data.indexDocSrc
        this.docSrc = data.indexDocSrc
        console.log(data.docMap)
        this.docMap = data.docMap
      }))
    },
  }
  
  /* 两位数 */
  function to2Num (n) {
    if (n<=9) return "0"+n
    else return n
  }
</script>

<style src="views/documents/documents.css" scoped></style>