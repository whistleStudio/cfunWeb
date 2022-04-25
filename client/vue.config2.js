const TerserPlugin = require("terser-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  configureWebpack: (cfg)=> {
    cfg.resolve = {
      alias: {
        "assets": "@/assets",
        "views": "@/views",
        "img": "@/assets/img",
        "components": "@/components"
      }
    }

    if (process.env.NODE_ENV === 'production') {
      cfg.externals = {
        Vue: "Vue",
        VueRouter: "VueRouter",
      }
      cfg.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // 默认false，设置为true, 则会删除所有console.* 相关的代码。
                pure_funcs: ["console.log"], // 单纯禁用console.log
              }
            }
          })
        ]        
      }
      cfg.plugins = [
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, // 匹配的文件名
          threshold: 10240, // 超过10K，进行gzip压缩
          deleteOriginalAssets: false // 是否删除原文件
        })
      ]
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8088",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/*.assets": {
        target: "http://127.0.0.1:8088",
        ws: true,
        changeOrigin: true,
      }
    }
  }    
}