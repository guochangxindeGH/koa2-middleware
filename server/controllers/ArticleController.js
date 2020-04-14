const DBConnector = require('../models/DBConnector')

class ArticleController {
    constructor() {

    }
    async findArticle(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.article;
        // const wsa = dbCon.models.get('user');
        let datas = await user.findAll({
            id: data,
        });
        let result = {
            msg: 'success',
            data: datas
        };
        return result;
    }
    async updateOrSetArticle(data) {
        const dbCon = await DBConnector.getInstance();
        let user = dbCon.sequelize.models.article;
        const one = await user.findOne({
            where: {
                id: data.id
            }
        })
        if (one) {
            return await one.update(data);
        } else {
            return await user.create(data);
        }
    }
    async deleteArticle(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.article;
        let datas = await user.destroy({
            where: {
                id: data.id
            }
        });
        let result = {
            msg: 'success',
            data: datas
        };
        return result;
    }
}

module.exports = ArticleController;
