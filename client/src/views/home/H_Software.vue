<!-- H_Software -->
<template>
  <div  id="HSoftware">
    <div>
      <div id="computer"></div>
      <div id="resume">
        <h1>图形化编程软件</h1>
        <h2>支持开源硬件和人工智能扩展</h2>
        <div id="startCode" @click="goAicode">开始编程</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    methods: {
      goAicode () {
        window.open('https://www.aicodestar.com', '_blank')
      }
    },
    components: {},
  }
</script>

<style scoped>
#HSoftware {
 width: 100%;
 min-width: 1000px;
 height: 100vh;
 background: url("https://dict.cfunworld.com/img/cfweb/softwareBg.jpg") center/cover no-repeat;
 display: flex;
 justify-content: center;
 align-items: center;
}
#HSoftware>div {
  width: 80%;
  height: 65vh;
  /* background-color: orange; */
}
#computer {
  float: left;
  width: 60%;
  height: 100%;
  background: url("https://dict.cfunworld.com/img/cfweb/softwareC.png") center/contain no-repeat;
}
#resume {
  float: right;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* border: 1px solid whitesmoke; */
  border-radius: 10px;
  box-sizing: border-box;
}
#resume>h1 {
  margin: 0;
  display: block;
  color: rgb(196, 246, 255);
  font: bolder 80px "Microsoft YaHei";
  /* font-size: 80px; */
}
#resume>h2 {
  margin-top: 10px;
  font: bold 30px "Microsoft YaHei";
  color: rgb(196, 246, 255);
  display: block;
}
#startCode {
  text-align: center;
  font: bold 30px/60px "HeiTi";
  color: rgba(255,255,255,0.8);
  margin-top: 50px;
  width: 300px;
  height: 60px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, rgb(254, 183, 66), rgb(255, 98, 103));
  box-shadow: 2px 2px 2px 1px gray;
  cursor: pointer;
}
#startCode:hover {
  color: white;
  box-shadow: 2px 2px 2px 1px inset gray;
}
</style>