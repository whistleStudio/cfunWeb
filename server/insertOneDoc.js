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
    title: "路口转弯时 原地打转找不到对应路口",
    keyword: "转圈",
    qid: 22020112503,
  })
  await newDoc.save()
  console.log("new Doc insert OK")
}