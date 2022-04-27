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
          <li v-for="(dv, di) in dirList" :key="di">
            <span @click="dirClick(di)" :class="{'dir-type-active': actDir===di, 'dir-type': actDir!==di}">{{dv}}</span>
            <ul v-show="actDir===di">
              <li v-for="(fv, fi) in fileList[di]" :key="fi" @click="fileClick(di, fi)"
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
        <div v-if="!searchSta" v-html="curContent" ref="ifr"></div>
        <div v-else-if="searchSta===1">
          <p id="res-p"><span>查询结果</span><span>与关键词匹配的主题有:</span></p>
          <ul id="res-ul">
            <li v-for="(v, i) in searchList" :key="i" 
            @click="searchLiClick(v)" class="res-li">{{v[2]}}</li>
          </ul>
        </div>
        <div v-else id="notfound"></div>
        <!-- <iframe :src="curSrc" frameborder="0" ref="ifr" width="100%"   scrolling="auto"></iframe> -->
      </div>
    </div>
    <div @click="toTop" id='to-top'></div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dirList: [], fileList: [],
        actDir: -1,
        curContent: "",
        breadNav: "",
        keyword: "",
        searchList: [],
        searchSta: 0
      };
    },
    computed: {
    },
    methods: {
      toHome () {
        this.breadNav = ''
        this.actDir = -1
        this.reqHome()
        this.searchSta = 0
      },
      dirClick (di) {
        if (this.actDir===di) {
          this.actDir = -1
        } else this.actDir = di
      },
      fileClick (di, fi) {
        this.reqDoc(di, fi) 
        this.searchSta = 0
      },
      searchLiClick (v) {
        this.curContent = ""
        this.reqDoc(v[0], v[1])
        this.searchSta = 0
      },
      reqDocList () {
        fetch("/api/doc/getDocList")
        .then(res => res.json()
        .then(data => {
          this.dirList = data.dirList
          this.fileList = data.fileList
        }))
      },
      reqDoc (di, fi) {
        fetch(`/api/doc/getDoc?di=${di}&&fi=${fi}`)
        .then(res => res.text()
        .then(data => {
          this.curContent = data
          this.breadNav = `\\${this.dirList[di]} \\${this.fileList[di][fi]}`
        }))
      },
      reqHome () {
        fetch('/api/doc/getHome')
        .then(res => res.text()
        .then(data => {
          this.curContent = data
        }))
      },
      toTop () {
        document.body.scrollTo({top: 0, behavior: 'smooth'})
        // this.$refs.ifr[0].scrollTop = 0
      },
      keySearch () {
        this.searchList = []
        let self = this
        document.onkeydown = ev => {
          if (ev.key === "Enter") {
            if (this.keyword) {
              this.breadNav = "\\搜索"
              let reg = new RegExp(this.keyword, "i")
              this.fileList.forEach((d, di) => {
                d.forEach((f, fi) => {
                  if (reg.test(f)) {
                    this.searchList.push([di, fi, f])
                  }
                })
              })
              if (this.searchList.length) this.searchSta = 1
              else this.searchSta = -1
            }
            this.$refs.sear.blur()
            console.log(this.searchList.length)
          }
        }

      }            
    },
    created() {
      this.reqDocList()
    },
    mounted() {
      this.reqHome()
    }
  }
</script>

<style src="views/documents/documents.css" scoped></style>