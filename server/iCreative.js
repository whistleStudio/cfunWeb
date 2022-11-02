const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017
const Creative = require("./core/db/Creative")

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  const myDoc = {
    sub: "淮安里运河沙盘",
    des: "以江苏省淮安市里运河风景区为主题设计大型创客沙盘",
    img: "https://dict.cfunworld.com/creative/00_%E6%B7%AE%E5%AE%89%E9%87%8C%E8%BF%90%E6%B2%B3%E6%B2%99%E7%9B%98/%E6%B7%AE%E5%AE%89%E6%B2%99%E7%9B%98.assets/image-20221102144550472.png",
    link: "https://dict.cfunworld.com/creative/00_%E6%B7%AE%E5%AE%89%E9%87%8C%E8%BF%90%E6%B2%B3%E6%B2%99%E7%9B%98/%E6%B7%AE%E5%AE%89%E6%B2%99%E7%9B%98.html",
    regDate: new Date()
  }
  //batch test
  // for (let v of Array(11)) {
  //   await Creative.create(myDoc)
  // }
  await Creative.create(myDoc)
  console.log(`${myDoc.sub} create OK`)
}

main ()
