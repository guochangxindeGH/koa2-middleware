const Koa = require('koa')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const cors = require('koa2-cors')
const views = require('koa-views')


const path = require('path')

const app = new Koa()


const index = require('./server/routes/index')
const user = require('./server/routes/users')

// 配置控制台日志中间件
app.use(koaLogger())
// 配置ctx.body解析中间件
app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}))
//使用跨域
app.use(cors())
// 配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname , './../static')
))
// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx, next) => {
    ctx.body = 'hello koa'
})



app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())









// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

// 监听启动端口
app.listen(3300, () => {
    console.log('[middleware] koa2-middleware is starting at port 3300');
})

module.exports = app
