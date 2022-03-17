<!-- documents -->
<template>
  <div id="documents">
    <div id="directory">
      <div id="search">
        <img :src="require('img/cflogo2.png')" alt="创趣天地" @click="$router.push('/')">
        <input type="search" placeholder="Search docs">
      </div>
      <div id="doc-tree">
        <ul></ul>
      </div>
    </div>
    <div id="main">
      <div id="main-head">
        <div id="bread-nav"><a>文档 </a><span style="color: rgb(100, 100, 100)">/概要</span></div>
        <a href="https://cfunworld.taobao.com/category.htm?spm=a1z10.5-c.w4010-6544316521.2.5832602fxUYF1K&search=y" target="_blank"><div id="shopcar"></div></a>  
      </div>
      <div id="main-content"></div>
    </div>
    <div id='to-top'></div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    components: {},
  }
</script>

<style src="views/documents/documents.css" scoped></style>