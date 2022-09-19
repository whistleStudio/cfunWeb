const express = require("express")
const rt = express.Router()
const {getFiles} = require("../utils/getDocs")
var path = require('path')

let {dirList, fileList, _dirList, _fileList} = getFiles(path.join(__dirname, '../../public/docs/html'))
/* 0919更新后用不到了 */
rt.get("/getDocList", (req, res) => {
  ;({dirList, fileList, _dirList, _fileList} = getFiles(path.join(__dirname, '../../public/docs/html')))
  res.json({err:0, dirList, fileList})
})

rt.get("/getDoc", (req, res) => {
  let {di, fi} = req.query
  let targetPath = `${_dirList[di]}/${_fileList[di][fi]}/${fileList[di][fi]}.html`
  res.sendFile(path.join(__dirname, "../../public/docs/html", targetPath))
})

rt.get("/getHome", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/docs/intro.html"))
})
module.exports = rt