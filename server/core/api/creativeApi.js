const express = require("express")
const rt = express.Router()
const Creative = require("../db/Creative")

rt.get("/pageData", (req, res) => {
  let {mode, pageNum, pageSkip} = req.query
  pageNum = parseInt(pageNum)
  pageSkip = parseInt(pageSkip)
  if (mode==1) {
    ;(async () => {
      try {
        const creData = await Creative.find({}, "-_id").skip(pageSkip*pageNum).limit(pageNum)
        res.json({err:0, creData})
      } catch(e){console.log(e);res.json({err:5})}
    })()
  } else {
    ;(async () => {
      try {
        const total = await Creative.find({})
        const creData = await Creative.find({}, "-_id").limit(pageNum)
        res.json({err:0, creData})
      } catch(e){console.log(e);res.json({err:5})}
    })()
  }
})

rt.get("/creData", (req, res) => {
  ;(async () => {
    try {
      let creData = await Creative.find({}, "-_id")
      res.json({err:0, creData})
    } catch(e){console.log(e);res.json({err:5})}
  })()
})

module.exports = rt