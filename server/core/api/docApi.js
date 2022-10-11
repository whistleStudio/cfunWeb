const express = require("express")
const rt = express.Router()
const Doc = require("../db/Doc")
const cateInfo = require("./cateInfoRefresh")
/* --------移动端---------- */
const homepageUrl = "https://dict.cfunworld.com/img/public/home.html"
// 请求主页
rt.get("/home", (req, res) => {
  try {
    res.json({err:0, src: homepageUrl})
  } catch(e){console.log(e);res.json({err:5})}
})
// 请求单个文档（PC直接前端目录跳转）
rt.get("/getPage", (req, res) => {
  let {sub, cate, item} = req.query
  switch (sub) {
    default: 
      try {
        ;(async () => {
          let q = await Doc.findOne({sub, cate, item}, "src")
          if (q) {
            let {src} = q
            res.json({err:0, src})
          } else res.json({err:1, msg:"文档查询失败"}) 
        })()
      } catch(e){console.log(e);res.json({err:5})}
  }
})
/* ----------------------- */


/* -----------PC端------------- */
const pcHomepageUrl = "https://dict.cfunworld.com/doc/0_控制器/01_CF-Board-A主控板/CF-Board-A主控板.html"
/* --------------------------- */



/* 公用mode: 1-PC, 0/undefined-移动端 */
// 请求目录
rt.get("/getCate", (req, res) => {
  const {mode} = req.query
  if (mode) {
    res.json({err:0, docMap: cateInfo[0].cate, indexDocSrc: pcHomepageUrl})
  } else res.json({err:0, cateInfo})
})
// 关键词搜索
rt.get("/kwSearch", (req, res) => {
  let {kw} = req.query
  console.log(kw)
  let filter = {
    $or: [
      {title: {$regex: kw, $options:"$i"}},
      {keyword: {$regex: kw, $options:"$i"}}
    ]
  }
  try {
    // console.log("🙂kwSearch", kw)
    if (kw) {
      ;(async () => {
        let q = await Doc.find(filter)
        if (q.length) {
          res.json({err:0, searchList:q})
        } else res.json({err:1})
      })()
    } else res.json({err:1})
  } catch(e){console.log(e);res.json({err:5})}
})

module.exports = rt