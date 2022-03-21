<!-- support/question -->
<template>
  <div id="question">
    <div class="topBanner"></div>
    <div id="que">
      <div id="search">
        <h2>常见问题</h2>
        <div>
          <input type="text" placeholder="请输入要搜索的内容"> 
          <div></div> 
        </div>
      </div>
      <div id="more">
        <ul>
          <li v-for="(v, i) in qs" :key="i" :class="{cateHover:actCate===i}"
          @mouseenter="actCate=i">{{v.cate}}</li>
        </ul>
        <div id="common">
          <ul>
            <li v-for="(v, i) in qs[actCate].common" :key="i">{{v.q}}</li>
          </ul>
          <div @mouseenter="wantMore=1" @mouseleave="wantMore=0" @click="toPage">
            <span :class="{spanBlue: wantMore}">查看更多</span>
            <div><div id="line" :class="{toBlue: wantMore}"></div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="service">
      <h2>联系客服</h2>
      <ul>
        <li v-for="(v ,i) in service" :key="i">{{v.way}}</li>
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
        {way: "微信客服"},
        {way: "QQ技术交流群"}
      ],
      actCate: 0,
      wantMore: 0,
    }
  },
  methods: {
    toPage () {
      this.$router.push("/support/measures")
    },

  }
}
</script>

<style scoped src="views/support/question.css"></style>
