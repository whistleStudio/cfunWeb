const express = require("express")
const rt = express.Router()
const Qusetion = require("../db/Question")
/* 获得分类列表 */
rt.get("/getQueList", (req, res) => {
  try {
    let {cate} = req.query
    cate = parseInt(cate)
    ;(async ()=>{
      let queList = await Qusetion.find({cate}, "cate title keyword lastEdit")
      res.json({err:0, queList})
    })()
  } catch(e) {
    res.json({err:5, msg: "database error"})
  }
})
/* 获得搜索列表 */
rt.get("/searchQue", (req, res) => {
  let {keyword} = req.query
  let reg = genReg(keyword)
  let filter = {
    $or: [
      {title: {$regex: reg, $options: "i"}},
      {keyword: {$regex: reg, $options: "i"}},
      {qid: {$regex: reg}}
    ]
  } 
  ;(async ()=> {
  try {
    let queList = await Qusetion.find(filter, "cate title keyword lastEdit")
    res.json({err:0, queList})
  } catch (e) {res.json({err:5, msg:"database error"})}
  })()
})
/* 模糊查找 abc -> a.*b.*c */
function genReg (str) {
  let s = ""
  str.split("").forEach(e => {
    s += (e + ".*")
  })
  let reg = RegExp(s)
  return reg
}
/* 获取热点问题 */
rt.get("/reqHotQue", (req, res) => {
  let hotQs = Array(6).fill(0).map(e => [])
  ;(async ()=>{
    try {
      for (let i=0; i<hotQs.length; i++) {
        let q  = await Qusetion.find({cate:i, hot:1}, "cate title keyword lastEdit")
        hotQs[i] = Array.prototype.slice.call(q, 0, 6)
      }
      res.json({err:0, hotQs})
    } catch (e) {console.log(e);res.json({err:5, msg:"database error"})}
  })()

})

module.exports = rt