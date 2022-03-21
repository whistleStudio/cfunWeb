<!-- support/measures -->
<template>
  <div id="measures">
    <div class="topBanner"></div>
    <div>
      <div id="menu">
        <div class="lhplbs">问题分类</div>
        <ul>
          <li v-for="(v, i) in qs" :key="i" @click="actCate=i"
          :class="{menuLiAct: actCate===i}"
          class="lhplbs">{{v.cate}}</li>
        </ul>
      </div>
      <div id="main">
        <div id="nav">
          <div id="bread"></div>
          <div id="search">
            <input type="text" placeholder="请输入要搜索的内容">
            <div></div> 
          </div>  
        </div>
        <div id="content"></div>
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
    }
  }
}
</script>

<style scoped>
.topBanner {
  width: 100%;
  height: 150px;
  background: url("~img/support/banner.jpg") center/cover no-repeat;
}
#measures>div:last-of-type {
  position: relative;
  min-height: calc(100vh - 150px);
  background-color: rgb(245, 245, 245);
}
#menu {
  position: absolute;
  width: 200px;
  height: 100%;
  background-color: white;
  
}
.lhplbs {
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding-left: 2rem;
  box-sizing: border-box;
}
#menu>div {
  background-color: white;
  font: bold 1.3rem/60px "Microsoft YaHei";
  /* border-bottom: 1px solid gray; */
  background-color: gainsboro;
  color: white;
  cursor: default;
}
#menu li {
  padding-left: 2rem;
  font-size: 1.2rem;

  background-color: white;
  cursor: pointer;
}
#menu li:hover {
  color: var(--rFontColorA);
}
.menuLiAct {
  color: var(--rFontColor);
  font-weight: bold;
}
#nav {
  margin-left: 200px;
  /* width: 90%; */
  height: 100px;
  background-color: red;
}
#search {
  float: right;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  
}
input {
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid gainsboro;
  border-radius: 0.3rem;
  text-indent: 1rem;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: gainsboro;
}

</style>