const Koa = require('koa');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const cors = require('koa2-cors');
const views = require('koa-views');

const models = require('./server/models/DBConnector')

const path = require('path');

const app = new Koa()


const indexRouter = require('./server/routes/index');
const userRouter = require('./server/routes/users');

const indexAPI = new indexRouter().getRouter();



// 配置跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:9000');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Max-Age', 3600 * 24);
    await next();
});

// 配置控制台日志中间件
app.use(koaLogger());

// 使用表单解析中间件
app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}));

//使用跨域
app.use(cors());

// 配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname , './../static')
));

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
});

// response
// app.use(async (ctx, next) => {
//     ctx.body = 'hello koa'
// })


app.use(indexAPI.routes(), indexAPI.allowedMethods());
// app.use(indexAPI.allowedMethods())

// app.use(indexRouter.routes(), indexRouter.allowedMethods())
// app.use(userRouter.routes(), userRouter.allowedMethods())



// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

// 监听启动端口
app.listen(3300, () => {
    console.log('[middleware] koa2-middleware is starting at port 3300');
});

module.exports = app
