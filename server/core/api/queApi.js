const express = require("express")
const rt = express.Router()
const Qusetion = require("../db/Question")

rt.get("/getQueList", (req, res) => {
  let {cate} = req.query
  cate = parseInt(cate)
  try {
    ;(async ()=>{
      let queList = await Qusetion.find({cate})
      res.json({err:0, queList})
    })()
  } catch(e) {
    res.json({err:5, msg: "database error"})
  }
})

rt.get("/searchQue", (req, res) => {
  let {keyword} = req.query
  let reg = genReg(keyword)
  let filter = {
    $or: [
      {title: {$regex: reg, $options: "i"}},
      {keyword: {$regex: reg, $options: "i"}}
    ]
  } 
  ;(async ()=> {
  try {
    let queList = await Qusetion.find(filter)
    res.json({err:0, queList})
  } catch (e) {res.json({err:5, msg:"database error"})}
  })()
})

function genReg (str) {
  let s = ""
  str.split("").forEach(e => {
    s += (e + ".*")
  })
  let reg = RegExp(s)
  return reg
}

module.exports = rt