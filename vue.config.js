// 但是有一个问题,就是我们的前端页面飞掉了, 显示Cannot POST /?为什么呢?因为我们这是跨域请求啊
// 本地localhost:8080 请求 localhost:3000 所以是跨域,端口不一样
// 我们可以开发过程中可以使用webpack的devserver的proxy功能
// devServer.proxy
// 如果你的前端应用和后端API服务器没有运行在同一个主机上,你需要在开发环境下将API请求代理到API服务器,
// 这个问题可以通过vue.config.js中的 devServer.proxy选项来配置
// 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:3000。
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
