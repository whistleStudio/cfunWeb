<template>
  <div id="carousel">
    <ul>
      <li class="showItem"></li>
    </ul>
    <div id="swapBtn">
        <span>&lt;</span>
        <span>&gt;</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#carousel {
  width: 100%;
  height: 100%;
  background-color: cadetblue;
  position: relative;
}
#carousel>ul {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.showItem {
  width: 100%;
  height: 100%;
  flex: none;
  background-color: yellow;
  background: url("~img/carousel/m1.jpg") center/cover no-repeat;
}
#swapBtn {
  width: 100%;
  position: absolute;
  top: 50%;
}
#swapBtn>span {
  color: gainsboro;
  font: 3rem sans-serif;
  text-align: center;
  display: block;
  width: 100px;
  height: 100px;
  cursor: pointer;
}
#swapBtn>span:first-of-type {
  float: left;
}
#swapBtn>span:last-of-type {
  float: right;
}

#swapBtn>span:hover {
  color: var(--rFontColorA);
}

</style>