const mongoose = require("mongoose")

const infoSchema = new mongoose.Schema({
  k1: String,
  k2: {type: String, default: "0"},
  v1: String,
  v2: String,
  v3: String,
  regDate: {type: Date, default: new Date()},
})
const Info = mongoose.model('infos', infoSchema)

module.exports = Info