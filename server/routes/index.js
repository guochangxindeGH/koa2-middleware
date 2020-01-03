const Router = require('koa-router')
// const { query } = require('../utils/query')
const {
    CREATE_TABLE,
    INSERT_TABLE,
    UPDATE_TABLE,
    DELETE_TABLE
} = require('../utils/sql')
const router = new Router();

// 初始化数据库，创建表
// query(CREATE_TABLE)
// 装载所有子路由

class MyClass {
    constructor() {
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
        this.router.get('/hello', async (ctx, next) => {
            ctx.body = {
                title: 'Hello Koa 2!'
            }
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
