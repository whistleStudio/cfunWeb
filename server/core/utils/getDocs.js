/* 导出指定目录内的无序号文件列表 */
var fs = require('fs')
var path = require('path')

function getFiles (url) {
  let dirList = [], fileList = [], _dirList = [], _fileList = []
  // let reg = /\d*_(.*)\.html/
  try {
    _dirList = getList(url)
    dirList = _dirList.filter(e => e.split('_')[1]).map(e => e.split('_')[1])
    
    _dirList.forEach(f => {
      let tempPath = path.join(url, f)
      let tempFiles = getList(tempPath)
      _fileList.push(tempFiles)
      tempFiles = tempFiles.filter(e => e.split('_')[1]).map(e => e.split('_')[1])
      fileList.push(tempFiles)
    })
  } catch(err) {console.log(err)}

  return { _dirList, dirList, _fileList, fileList }
}
function getList (url) {
  let targetList = []
  let tempList = fs.readdirSync(url)
  tempList.forEach(f => {
    let tempPath = path.join(url, f)
    if (fs.statSync(tempPath).isDirectory()) {
      targetList.push(f)
    }
  })
  return targetList
}

module.exports = {getFiles}