const express = require("express")
const rt = express.Router()
const Info = require("../db/Info")
const cors = require('cors')

/* 获得分类列表 */
rt.get("/getInfo", cors(), (req, res) => {
  try {
    let {k1, k2} = req.query
    ;(async ()=>{
      let v = await Info.findOne({k1, k2})
      if (v) res.json({err:0, v})
      else res.json({err:1, msg: "信息获取失败"})
    })()
  } catch(e) {
    res.json({err:5, msg: "database error"})
  }
})

module.exports = rt