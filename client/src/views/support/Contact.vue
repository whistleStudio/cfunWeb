<!-- CONTACT -->
<template>
  <div id="contact">
    <div class="topBanner"></div>
    <div id="content">
      <div id="cTitle">联系我们</div>
      <div id="cInfo">
        <ul>
          <li v-for="v in infoData.slice(0,2)" :key="v.id"><div class="cIcon" :style="{backgroundImage: v.img}"></div> <span class="cIconText">{{v.text}}</span></li>
          <li>
            <div class="cIcon" :style="{backgroundImage: infoData[2].img}"></div> 
            <div>
              <span class="cIconText" v-for="(v,i) in infoData[2].text" :key="i">{{v[0]}}<br>{{v[1]}}</span>
            </div>
          </li>
        </ul>
        <div id="cSend">
          <div>留言给我们:</div>
          <div>
            <div id="cSend1" ><input type="text" placeholder="公司"></div>
            <div id="cSend2">
              <select name="" id="" class="sendHalf">
                <option disabled value="">问题分类</option>
                <option v-for="(v,i) in ['产品咨询','技术支持', '商务合作', '其他']" :key="i">{{v}}</option>
              </select>
              <input type="text" placeholder="*姓名" class="sendHalf">
            </div>
            <div id="cSend3" style="height: 2.5vh"><input type="text" placeholder="*邮箱(我们会在24小时内回复您)" class="sendHalf"> <input type="text" placeholder="*所在地" class="sendHalf"></div>
            <div id="cSend4"><textarea name="" id="" cols="30" rows="10" placeholder="*详情描述"></textarea></div>
            <div id="cSubmit">提交</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        infoData: [
          {id:0, img:`url(${require("img/footbar/contactIcon2.png")})`, text:"江苏省南京市鼓楼区世贸中心大厦A2座16楼"},
          {id:1, img:`url(${require("img/footbar/contactIcon1.png")})`, text:"172923446@qq.com"},
          {id:2, img:`url(${require("img/footbar/contactIcon0.png")})`, text:[["(服务热线)","4008231300"],["(销售电话)","15986633377"]]},
        ],
      };
    },

  }
</script>

<style src="views/support/contact.css" scoped></style>
<style lang='css' scoped>
</style>