const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  cate: Number,
  keyword: String,
  qid: Number,
  title: String,
  regDate: {type: Date, default: new Date()},
})
const Qusetion = mongoose.model('questions', questionSchema)

module.exports = Qusetion