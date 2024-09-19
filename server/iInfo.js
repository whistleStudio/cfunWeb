/* 补充信息插入 */
const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017
const Info = require("./core/db/Info")

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  const myDoc = {
    k1: "aicodestar",
    k2: "",
    v1: "v240914",
    v2: "https://cfunassets.oss-cn-hangzhou.aliyuncs.com/%E8%BD%AF%E4%BB%B6/%E7%BC%96%E7%A8%8B%E6%98%9F%E7%A9%BA/%E7%BC%96%E7%A8%8B%E6%98%9F%E7%A9%BA-20240914%EF%BC%88%E6%B5%8B%E8%AF%95%E7%89%88%EF%BC%89.exe"
  }
  await Info.create(myDoc)
  console.log(`${myDoc} create OK`)
}

main ()
