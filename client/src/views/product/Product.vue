<!-- product -->
<template>
  <div>
    <div :style="{backgroundImage: `url(${require('img/product/'+imgInfo[actId].v+'0.jpg')})`}" 
    class="topBanner"></div>
    <div class="content">
      <img v-for="(v, i) in Array(imgInfo[actId].lastIdx)" :key="i" 
      :src="require('img/product/'+imgInfo[actId].v+(i+1)+'.jpg')" alt="">
    </div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
    components: {},
    computed: {
      actId: function () {
        return this.$route.query.id
      }
    },

  }
</script>

<style  src="views/product/product.css" scoped></style>