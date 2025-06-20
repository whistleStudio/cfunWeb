<!-- 编程系列 -->
<template>
  <div class="program">
    <ul class="flex-col-center">
      <li class="flex-col-center">
        <div class="p-title">{{list[0].title}}</div>
        <div class="p-sum">{{list[0].sum}}</div>
        <div class="books">
          <div v-for="v in bookList">
            <img src="../../../assets/img/product/book.svg" alt="" style="width: 60px;opacity: 0.5;margin-bottom: 0;">
            <a :href="v.link" target="_blank"><span style="font-size: 25px;">点击查看 </span>{{v.title}}</a>
          </div>
        </div>
        <img :src="list[0].img" alt="" style="margin-bottom: 30px;">
        <img :src="list[0].img2" alt="">
        <video :src="list[0].vid" :poster="list[0].poster" controls></video>
      </li>
      <li class="flex-col-center">
        <div class="p-title">{{list[1].title}}</div>
        <div class="p-sum">{{list[1].sum}}</div>
        <img :src="list[1].img" alt="" style="margin-bottom: 40px;">
        <img :src="list[1].img2" alt="" style="margin-bottom: 60px;">
        <video :src="list[1].vid" controls></video>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            title: "创趣星盒", sum: "适配信息科技新课标，集成丰富支持外扩，车、控多形态", 
            img: "https://dict.cfunworld.com/img/cfweb/product/xxkj1.jpg", 
            img2: "https://dict.cfunworld.com/img/cfweb/product/xxkj2.jpg",
            poster: "https://dict.cfunworld.com/img/cfweb/product/%E5%88%9B%E8%B6%A3%E6%98%9F%E7%9B%92%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.jpg",
            vid: "https://dict.cfunworld.com/img/cfweb/product/%E5%88%9B%E8%B6%A3%E6%98%9F%E7%9B%92%E6%BC%94%E7%A4%BA.mp4" 
          },
          {
            title: "场景实践套装", sum: "适配苏教新课标，智能场景还原，快拆快搭", 
            img: "https://dict.cfunworld.com/img/cfweb/product/xxkj11.jpg", 
            img2: "https://dict.cfunworld.com/img/cfweb/product/xxkj12.jpg",
            vid: "https://dict.cfunworld.com/img/cfweb/product/%E5%9C%BA%E6%99%AF%E5%AE%9E%E8%B7%B5%E5%A5%97%E8%A3%85%E7%BB%BC%E5%90%88%E6%BC%94%E7%A4%BA.mp4",
          }  
        ],
        bookList: [
          {title: "《义教版教学指南适配》", link: "https://dict.cfunworld.com/tutorial/starbox_yj/index.html"},
          {title: "《苏教版教材适配》", link: "https://dict.cfunworld.com/img/cfweb/product/%E8%8B%8F%E6%95%99%E7%89%88%E6%95%99%E6%9D%90%E9%80%82%E9%85%8D%E6%B8%85%E5%8D%95.png"},
        ]
      };
    },
    components: {},
  }
</script>

<style scoped lang="scss">
$curColor: #40bccb;

.program {
  .books {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin:0 50px;
      img {
        width: 60px;
        height: 60px;
        min-width: 40px;
        min-height: 40px;
        max-width: 80px;
        max-height: 80px;
        opacity: 0.5;
        margin-bottom: 0;
        display: block;
      }
      a {
        display: block;
        font-size: 24px;
        line-height: 36px;
        color: $curColor;
        margin-left: 10px;
        opacity: 0.8;
        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
        span {
          font-size: 18px;
        }
      }
    }
  }
  >ul {
    margin-top: 60px;
    >li {
      margin-bottom: 80px;
      .p-title {
        font: bold 28px/1.3 $fontF;
        color: $gray100;
        text-align: center;
        margin: 20px 0 8px 0;
      }
      .p-sum {
        font: 16px/1.6 $fontF;
        color: $gray100;
        margin-bottom: 14px;
        text-align: center;
      }
      img {
        width: 100%;
        max-width: 600px;
        margin: 0 auto 20px auto;
        display: block;
      }
      video {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px gray;
        display: block;
      } 
    }
  }
}

/* 响应式移动端适配 */
@media (max-width: 768px) {
  .program {
    width: 100vw !important;
    > ul {
      margin-top: 20px;
      > li {
        margin-bottom: 30px;
        .p-title {
          font: bold 18px/1.3 $fontF;
          margin: 12px 0 4px 0;
        }
        .p-sum {
          font-size: 14px;
          margin-bottom: 8px;
          line-height: 1.5;
        }
        // img,
        // video {
        //   width: auto !important;
        //   max-width: auto !important;
        // }
      }
    }
    .books {
      flex-direction: column;
      > div {
        margin: 8px 0;
        img {
          width: 36px;
          height: 36px;
          min-width: 24px;
          min-height: 24px;
          max-width: 48px;
          max-height: 48px;
        }
        a {
          font-size: 15px !important;
          line-height: 28px !important;
          span {
            font-size: 14px !important;
          }
        }
      }
    }
  }
}
</style>