const Router = require('koa-router')
const IndexController = require('../controllers/IndexController')


// 初始化数据库，创建表
// query(CREATE_TABLE)
// 装载所有子路由

class MyClass {
    constructor() {
        this.indexController = new IndexController();
        this.router = new Router()
        this.registerPath()
    }
    registerPath() {
        this.router.get('/', async (ctx) => {
            ctx.response.type = 'text';
            ctx.response.body = {
                value: '123'
            };
            ctx.status = 200;
        })
        this.router.get('/get_user_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.findUser(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.post('/create_user_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.setUser(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.post('/destroy_user_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.deleteUser(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.post('/update_user_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.updateUser(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })

        this.router.get('/string', async (ctx, next) => {
            ctx.response.type = 'text';
            ctx.response.body = {
                value: 'koa2 string'
            };
            ctx.status = 200;
        })
        this.router.get('/json', async (ctx, next) => {
            ctx.response.type = 'text';
            ctx.status = 200;
            ctx.body = {
                title: 'koa2 json'
            }
        })
    }
    getRouter() {
        return this.router
    }
}



module.exports = MyClass
