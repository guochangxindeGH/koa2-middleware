const DBConnector = require('../models/DBConnector')

class IndexController {
    constructor() {

    }
    async findUser(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.user;
        // const wsa = dbCon.models.get('user');
        let datas = await user.findAll({
            id: 123,
        });
        let result = {
            msg: 'success',
            data: datas
        };
        return result;
    }
    async setUser(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.user;
        let datas = await user.create({
            id: 123,
            firstName: data.id,
            lastName: data.id,
            age: 17,
            email: '29197422@qq.com',
            password: 124,
            state: 1,
        });
        let result = {
            msg: 'success',
            data: datas
        };
        return result;
    }
    async deleteUser(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.user;
        let datas = await user.destroy({
            id: data.id
        });
        let result = {
            msg: 'success',
            data: datas
        };
        return result;
    }
    async updateUser(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.user;
        let datas = await user.update({
            firstName: 'g',
            lastName: 'cx',
            age: 24,
            email: '29197422@qq.com',
            password: 123456,
            state: 2,
        }, {
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

module.exports = IndexController;
