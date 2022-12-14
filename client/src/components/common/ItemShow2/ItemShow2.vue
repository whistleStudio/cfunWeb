<!-- itemshow2 -->
<template>
  <div id="itemShow2">
    <ul id="pItems">
      <li v-for="(v, i) in _pData.slice(pStart, pEnd)" :key="i" 
      @mouseover="triggerHover(i)"  @mouseout="removeHover(i)" @click="getInfo(v.sub, v.link)">
        <div class="pic" :style="{backgroundImage: `url(${v.img})`}"></div>
        <div class="resume">
          <h3><span>{{v.sub}}</span></h3>
          <div>{{v.des}}</div>
          <span>了解更多</span>
        </div>
      </li>                    
    </ul>
    <div id="pNavBtn">
      <ul>
        <li @click="changePage(-1)"><span>&lt;</span></li>
        <li v-for="(v, i) in Array(curPages)" :key="i"
        @click="selectPage(i)" :class="{btnActive: curSelectPage == i}"><span>{{i+1}}</span></li>
        <li @click="changePage(1)"><span>&gt;</span></li>
      </ul> 
    </div>
  </div>  
</template>

<script>

export default {
  data () {
    return {
      pData: this._pData,
      curSelectPage: 0, 
      actCateIdx: this._actCateIdx,
      pStart: 0,
      pEnd: this._pEndMax,    
    }
  },
  computed: {
    curPages: function () {
      return Math.ceil(this.curTotals / this._pEndMax)
    },
    curTotals: function () {
      return this._pData.length  
    }    
  },
  props: {
    _pData: Array, //总数据
    _actCateIdx: {
      type: Number,
      default: -1
    },
    _pEndMax: { //单页数量
      type: Number,
      default: 9
    } 
  },
  methods: {
    selectPage (i) {
      this.curSelectPage = i
      this.pStart = i * this._pEndMax
      this.pEnd = (i+1) * this._pEndMax
    },
    changePage (i) {
      if (i === -1 && this.curSelectPage !== 0) {
        this.curSelectPage --
      }
      if (i === 1 && this.curSelectPage !== this.curPages-1) {
        this.curSelectPage ++
      }
      this.pStart = this.curSelectPage * this._pEndMax
      this.pEnd = (this.curSelectPage+1) * this._pEndMax
    },
    triggerHover (i) {
      let idx = i%this._pEndMax
      document.querySelectorAll(".pic")[idx].classList.add("picHover")
      document.querySelectorAll(".resume>span")[idx].classList.add("spanHover")
    },
    removeHover (i) {
       let idx = i%this._pEndMax
       document.querySelectorAll(".pic")[idx].classList.remove("picHover")
      document.querySelectorAll(".resume>span")[idx].classList.remove("spanHover")
    },
    getInfo (sub, link) {
      // let pInfo = this.actCateIdx<0 ? this.pData[i] : this.pData[this.actCateIdx].v[i]
      // if (pInfo.link2) {
      //   this.$router.push({
      //     path: "/activity/actInfo",
      //     query: {info: pInfo.link2}
      //   })
      // } else {
      //   window.open(pInfo.link)
      // }
      this.$emit("showCrea", {sub, link})
      // window.open(link)
    }    
  },
}
</script>

<style  src="components/common/ItemShow2/ItemShow2.css" scoped> </style>
<style scoped>

</style>