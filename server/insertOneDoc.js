const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017

const questionSchema = new mongoose.Schema({
  cate: Number,
  keyword: String,
  qid: Number,
  title: String,
  regDate: {type: Date, default: new Date()},
})
const Qusetion = mongoose.model('questions', questionSchema)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  var newDoc = new Qusetion({
    cate: 2,
    title: "路口转弯后 程序异常 好像有跳程序的现象",
    keyword: "不执行 路线随机",
    qid: 22020112504,
  })
  await newDoc.save()
  console.log("new Doc insert OK")
}