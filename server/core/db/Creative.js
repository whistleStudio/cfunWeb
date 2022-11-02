const mongoose = require("mongoose")

const creativeSchema = new mongoose.Schema({
  sub: String,
  des: String,
  img: String,
  link: String,
  regDate: {type: Date, default: new Date()},
})
const Creative = mongoose.model('creatives',creativeSchema)

module.exports = Creative