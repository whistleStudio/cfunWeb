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
  title: String,
  regDate: {type: Date, default: new Date()},
}
## [202203222200]
问题数据库建立 api: getQueList
把静态文件都放在了vue的public, 这样文件目录就清楚多了
点击menu分类,请求数据库该类别下所有问题,点击查看具体
还差 面包屑导航针对不同状态切换, 问题检索, 还有就是404, 上级目录的部分展示
## [202203231817]
官网常见问题页面完成，搜索功能会将关键词与数据库文档的keyword，title字段比较，匹配成功的返回；如搜索“电机”，可能返回的文档为“电机旋转”，“电的机器”等；
目前只录进去两三个文档，智能机器人板块，问题文档和技术文档格式要求类似，markdown编辑转HTML
## [202203231919]
修复一个小BUG api: /getQueList cate需要是一个number类型
又加了一个文档，动态添加测试OK
## [202204251724]
进一步优化首页加载速度
去除了vue import, 本来就是external的 忘记删了，导致打包还是会打；
安装了插件compression-webpack-plugin，用于输出gzip格式，服务器端nginx配置也需要微调
(另安装了打包分析插件webpack-bundle-analyzer)
## [202204261613]
productionSourceMap:false
压缩了首页几张图片
## [202204271630]
document - 修复关键词搜索后导航栏问题
## [202204281119]
超级大加速！
1 使用路过图床，外链图片（18s->6s）
2 新增vue-lazyload模块，用于懒加载图片，提速，并且有了loading,error占位图

## [202205201430]
加速提高稳定
生产环境用阿里云对象存储请求index页面css js外链文件

## [202209191703]

1【调整】技术文档页改请求阿里云对象存储，根据云端映射表docMap.js请求指定文档，同时html增加`document.addEventListener("message", ()=>{})`解决跨域对象操作

## [202209211755]

1 【修复】Measure页刷新不显示问题列表问题

2 【调整】现常见问题请求后台返回问题列表，单个文档（cate title lastEdit keyword），再根据cate title请求阿里云对象存储；另问题文档增加hot字段 决定question页显示内容

## [202209221418]

1 【修复】Question 点击更多，调整到measure页显示错误

2 【调整】将大部分静态图片资源改为阿里云对象存储

3 【删除】去除server关于doc的无用代码

## [202209261435]

1 【新增】课程、赛事活动、解决方案页面

## [202210111208]

1 【调整】

- client

文档索引改从数据库中获取；文档页初始会判断是否为移动端，如是移动端跳转至dictwx.cfunworld.com；文档检索现增关键词关联检索

- server

docApi - 处理PC端和移动端文档逻辑

