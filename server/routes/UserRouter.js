const Router = require('koa-router')
const UserController = require('../controllers/UserController')



// 装载所有子路由
class MyClass {
    constructor() {
        this.indexController = new UserController();
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
        this.router.get('/get_user_data/:id', async (ctx, next) => {
            const id = ctx.params.id
            let result = await this.indexController.findUser(id);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.post('/create_or_update_user_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.updateOrSetUser(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.delete('/destroy_user_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.deleteUser(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })

    }
    getRouter() {
        return this.router
    }
}



module.exports = MyClass
