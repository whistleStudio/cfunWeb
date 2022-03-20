<!-- support/measures -->
<template>
  <div id="measures">
    <div class="topBanner"></div>
    <div>
      <div id="menu">
        <div>问题分类</div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div id="main">
        <div id="nav"></div>
        <div id="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.topBanner {
  width: 100%;
  height: 150px;
  background: url("~img/support/banner.jpg") center/cover no-repeat;
}
#measures>:last-of-type {
  position: relative;
  min-height: calc(100vh - 150px);
}
#menu {
  position: absolute;
  min-height: calc(100vh - 150px);
  height: 100%;
  background-color: orange;
}

</style>