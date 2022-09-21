const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  cate: Number,
  keyword: String,
  qid: String,
  title: String,
  regDate: {type: Date},
  lastEdit: {type: Date},
  hot: {type: Number, default: 0}
})
const Qusetion = mongoose.model('questions', questionSchema)

module.exports = Qusetion