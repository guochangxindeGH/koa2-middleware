const Router = require('koa-router')
const ArticleController = require('../controllers/ArticleController')



// 装载所有子路由
class MyClass {
    constructor() {
        this.indexController = new ArticleController();
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
        this.router.get('/get_article_data/:id', async (ctx, next) => {
            const data = ctx.params.id
            let result = await this.indexController.findArticle(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.post('/create_or_update_article_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.updateOrSetArticle(data);
            ctx.response.type = 'json';
            ctx.status = 200;
            ctx.body = result
        })
        this.router.delete('/destroy_article_data', async (ctx, next) => {
            const data = ctx.request.body
            let result = await this.indexController.deleteArticle(data);
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
