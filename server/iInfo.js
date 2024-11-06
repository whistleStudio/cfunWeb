/* 补充信息插入 */
const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017
const Info = require("./core/db/Info")

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  const myDoc = {
    k1: "dsx_board",
    k2: "0",
    v1: "v1.17",
    v2: "https://assets.cfunworld.com/%E8%BD%AF%E4%BB%B6/%E5%9B%BA%E4%BB%B6/%E5%BC%80%E6%BA%90%E5%A4%A7%E5%B8%88%E5%85%84/CF_Hi3861_wifiiot_app_allinoneV1_17.bin",
    v3: `v1.15 修复语音合成在线功能

  v1.16 增加语音识别提示灯功能；增加在线模式屏显提示信息

  v1.16a 修复语音识别提示灯功能在线运行开启关闭问题

  v1.17 修复称重读值问题`
  }
  await Info.create(myDoc)
  console.log(`${myDoc} create OK`)
}

main ()
