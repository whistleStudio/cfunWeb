<!-- product -->
<template>
  <div>
    <div :style="{backgroundImage: `url(${imgUrl+imgInfo[actId].v+'0.jpg'})`}" 
    class="topBanner"></div>
    <div class="content">
      <p-software v-if="actId===0"></p-software>
      <p-non-program v-else-if="actId===1" />
      <img v-else v-for="(v, i) in Array(imgInfo[actId].lastIdx)" :key="i" 
      :src="imgUrl+imgInfo[actId].v+(i+1)+'.jpg'" alt="">
    </div>    
  </div>
</template>

<script>
  import PSoftware from "./child/PSoftware.vue"
  import PNonProgram from "./child/PNonProgram.vue";
  export default {
    data () {
      return {
        imgUrl: "https://dict.cfunworld.com/img/cfweb/product/",
        imgInfo: [
          {id:0, v:"sfw", lastIdx:2},
          {id:1, v:"np", lastIdx:3},
          {id:2, v:"p", lastIdx:5},
          {id:3, v:"c", lastIdx:1},
          {id:4, v:"rb", lastIdx:3},
          {id:5, v:"sfw", lastIdx:2},
        ],
      };
    },
    components: {
      "p-software": PSoftware,
      "p-non-program": PNonProgram
    },
    computed: {
      actId: function () {
        return this.$route.query.id
      }
    },
    created () {
      console.log(this.actId)
    }

  }
</script>

<style  src="views/product/product.css" scoped></style>