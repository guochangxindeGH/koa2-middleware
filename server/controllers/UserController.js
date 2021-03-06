const DBConnector = require('../models/DBConnector')

class UserController {
    constructor() {

    }
    async findUser(id) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.user;
        // const wsa = dbCon.models.get('user');
        let data = await user.findAll({
            id: id,
        });
        let result = {
            msg: 'success',
            data: data
        };
        return result;
    }
    async updateOrSetUser(data) {
        const dbCon = await DBConnector.getInstance();
        let user = dbCon.sequelize.models.user;
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
    async deleteUser(data) {
        const dbCon = await DBConnector.getInstance();
        const user = dbCon.sequelize.models.user;
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

module.exports = UserController;
