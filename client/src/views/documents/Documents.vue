<!-- documents -->
<template>
  <div id="documents">
    <div id="directory">
      <div id="search">
        <img :src="require('img/cflogo2.png')" alt="创趣天地" @click="$router.push('/')">
        <input v-model="keyword" @focus="keySearch" ref="sear"
        type="search" placeholder="关键词搜索">
      </div>
      <div id="doc-tree">
        <ul>
          <li v-for="(dv, di) in Object.values(docMap)" :key="di">
            <span @click="dirClick(di)" :class="{'dir-type-active': actDir===di, 'dir-type': actDir!==di}">{{dv.cate}}</span>
            <ul v-show="actDir===di">
              <li v-for="(fv, fi) in Object.values(dv.list)" :key="fi" @click="fileClick(di, fi, fv)"
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
            @click="searchLiClick(v)" class="res-li">{{v[2]}}</li>
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
        keyword: "", searchList: [], searchSta: 0, docMap, indexDocSrc, docSrc:"",
        docUrl: "https://dict.cfunworld.com/doc/",
      };
    },
    computed: {
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
        let fileUrl = `${di}_${this.docMap[di].cate}/${to2Num(fi)}_${fv}/${fv}.html`
        this.docSrc = this.docUrl + fileUrl
        this.breadNav = `\\${this.docMap[di].cate} \\${fv}`
        this.searchSta = 0
      },
      /* 点击搜索列表，请求文档 */
      searchLiClick (v) {
        let di = v[0], fi = v[1], fv = v[2]
        let fileUrl = `${di}_${this.docMap[di].cate}/${to2Num(fi)}_${fv}/${fv}.html`
        this.docSrc = this.docUrl + fileUrl
        this.breadNav = `\\${this.docMap[di].cate} \\${fv}`
        this.searchSta = 0
      },
      /* 关键词搜索 */
      keySearch () {
        this.searchList = []
        document.onkeydown = ev => {
          if (ev.key === "Enter") {
            if (this.keyword) {
              this.breadNav = "\\搜索"
              let reg = new RegExp(this.keyword, "i")
              Object.values(this.docMap).forEach((d, di) => {
                Object.values(d.list).forEach((f, fi) => {
                  if (reg.test(f)) this.searchList.push([di, fi, f])
                })
              })
              if (this.searchList.length) this.searchSta = 1
              else this.searchSta = -1
            }
            this.$refs.sear.blur()
            console.log(this.searchList.length)
          }
        }
      },
      /* 回到文档顶部 */
      toTop () {
        this.$refs.ifr.contentWindow.postMessage("scrollTop", 'https://dict.cfunworld.com')
      },
    },
    created() {
      this.docSrc = this.indexDocSrc
    },
  }
  
  /* 两位数 */
  function to2Num (n) {
    if (n<=9) return "0"+n
    else return n
  }
</script>

<style src="views/documents/documents.css" scoped></style>