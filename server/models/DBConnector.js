/*
* 数据库表关系建立
*/
// 引入mysql的配置文件
const Sequelize = require('sequelize');
const path = require('path');

const ALL_CONFIG = require(path.join(process.cwd(),'/config.json'));
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
        if(_instance === null){
            _instance = new DBConnector();
            await _instance.processMySql();
        }
        return _instance;
    }
    //连接mysql的流程方法
    async processMySql(){
        //两种方式连接数据库
        // this.sequelize = db.sequelize;
        await this.initMysql();
        await this.initDataModel();
    }
    async initMysql() {
        this.sequelize = new Sequelize(ALL_CONFIG.DATABASE_CONFIG);
    }

    async initDataModel(is_force = false) {
        const article = _instance.sequelize.import('./article');
        article.sync({force: is_force});

        const user = this.sequelize.import('./user');
        user.sync({force: is_force});

        console.log('数据库初始化完毕');
    }
}



module.exports = DBConnector;


