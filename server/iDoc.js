const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017
const Doc = require("./core/db/Doc")

main().catch(err => console.log(err));
 
const docArr = ["控制器", "执行器", "传感器"]
async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  const myDoc = {
    title: "旋钮模块",
    cate: 2,
    item: 2,
    keyword: "模拟|角度",
    src: ""
  }
  const defaultSrc = `https://dict.cfunworld.com/doc/${myDoc.cate}_${docArr[myDoc.cate]}/${to2Num(myDoc.item)}_${myDoc.title}/${myDoc.title}.html`
  var newDoc = new Doc({
    title: myDoc.title,
    cate: myDoc.cate,
    item: myDoc.item,
    keyword: myDoc.keyword,
    src: myDoc.src ? myDoc.src : defaultSrc,
  })
  await newDoc.save()
  console.log("-- new Doc insert OK --")
}

/* 两位数 */
function to2Num (n) {
  if (n<=9) return "0"+n
  else return n
}