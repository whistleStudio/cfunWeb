const express = require("express")
const rt = express.Router()
const Qusetion = require("../db/Question")

rt.get("/getQueList", (req, res) => {
  let {cate} = req.query
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

})

module.exports = rt