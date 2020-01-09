/*
* 数据库表关系建立
*/
// 引入mysql的配置文件
const db = require('./db');
let _instance = null;

class DBConnector {
    constructor() {
        this.sequelize = null;
        _instance = this;
    }
    /**
     * 数据库连接的单例
     */
    static async getInstance(){
        if(_instance===null){
            _instance = new DBConnector();
            await _instance.processMySql();
        }
        return _instance;
    }
    //连接mysql的流程方法
    async processMySql(){
        await this.initDataModel();
        this.sequelize = db.sequelize;
    }
    async initDataModel() {
        const article = this.sequelize.import('./article');
        article.sync({force: true});

        const user = this.sequelize.import('./user');
        user.sync({force: true});
    }
}


module.exports = DBConnector;


