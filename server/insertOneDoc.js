const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017

const questionSchema = new mongoose.Schema({
  cate: Number,
  keyword: String,
  qid: String,
  title: String,
  regDate: {type: Date},
  lastEdit: {type: Date}
})
const Qusetion = mongoose.model('questions', questionSchema)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  let d = new Date()
  var newDoc = new Qusetion({
    cate: 2,
    title: "小车冲出起始区后跑偏",
    keyword: "启动异常",
    qid: "022020112504",
    regDate: d,
    lastEdit: d
  })
  await newDoc.save()
  console.log("new Doc insert OK")
}