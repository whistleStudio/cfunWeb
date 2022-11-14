<!-- product -->
<template>
  <div>
    <div :style="{backgroundImage: `url(${imgUrl+imgInfo[actId].v+'0.jpg'})`}" 
    class="topBanner"></div>
    <div class="content">
      <p-software v-if="actId===0"></p-software>
      <p-non-program v-else-if="actId===1" />
      <p-program v-else-if="actId===2" />
      <p-robot v-else-if="actId===3" />
      <img v-else-if="actId===4" v-for="(v, i) in Array(imgInfo[actId].lastIdx)" :key="i" 
      :src="imgUrl+imgInfo[actId].v+(i+1)+'.jpg'" alt="">
    </div>    
  </div>
</template>

<script>
  import PSoftware from "./child/PSoftware.vue";
  import PNonProgram from "./child/PNonProgram.vue";
  import PProgram from "./child/PProgram.vue";
  import PRobot from "./child/PRobot.vue";

  export default {
    data () {
      return {
        imgUrl: "https://dict.cfunworld.com/img/cfweb/product/",
        imgInfo: [
          {id:0, v:"sfw", lastIdx:2},
          {id:1, v:"np", lastIdx:3},
          {id:2, v:"p", lastIdx:5},
          {id:3, v:"rb", lastIdx:3},
          {id:4, v:"c", lastIdx:1},
          // {id:5, v:"sfw", lastIdx:2},
        ],
      };
    },
    components: {
      "p-software": PSoftware,
      "p-non-program": PNonProgram,
      "p-program": PProgram,
      "p-robot": PRobot
    },
    computed: {
      actId: function () {
        return parseInt(this.$route.query.id)
      }
    }
  }
</script>

<style  src="views/product/product.css" scoped></style>