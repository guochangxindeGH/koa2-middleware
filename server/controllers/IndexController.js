const DBConnector = require('../models/DBConnector')

class IndexController {
    constructor() {

    }

    async setUser(data) {
        const dbCon = await DBConnector.getInstance();
        const a = dbCon.sequelize.models.user;
        // const wsa = dbCon.models.get('user');
        await a.create({
            id: 123,
            firstName: data.a,
            lastName: data.a,
            age: 17,
            email: '29197422@qq.com',
            password: 124,
            state: 1,
        });
        let result = {
            msg: 'success'
        };
        return result;
    }
}

module.exports = IndexController;
