## [202203071051] 
创建
## [202203151730] 
主页H_Software图，导航栏做了一小部分
## [202203161721] 
主页导航栏大下拉，主页其他内容图，footbar
## [202203171808] 
老网页移植基本完成，建立基本server, 打包了一下
routes有children时，正常跳转需在父级路由里面用router-view
## [202203181900] 
在家办公第二天，效率还挺高，把技术文档查询功能也移植过来了，打包时候忘记改静态目录路径，搞半天 丑陋
文档资料的图片还是得单独弄个文件夹指定，不知道有没有办法把HTML和图片文件夹放一起呢
## [202203202028]
数据多的时候还是单独写个JSON文件比较清楚，导入还是import xx from "xxx"
进度条动画，还是用动态添加带动画的类的方法
support - contact ok
support - question 基本也完成了
搜索逻辑打算 数据库存储问题以及关键词，搜索词与关键词正则，匹配结果加权显示

## [202203211433]
support - measures 页面大致框架
## [202203221437]
support - measures 页面框架细化
question 数据库结构
{
  cate: Number,
  keyword: String,
  qid: Number,
  link: String,
  regDate: {type: Date, default: new Date()},
}
## [202203222200]
问题数据库建立 api: getQueList
把静态文件都放在了vue的public, 这样文件目录就清楚多了
点击menu分类,请求数据库该类别下所有问题,点击查看具体
还差 面包屑导航针对不同状态切换, 问题检索, 还有就是404, 上级目录的部分展示