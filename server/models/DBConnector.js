/*
* 数据库表关系建立
*/
// 引入mysql的配置文件
const db = require('./db');

// 引入sequelize对象
const Sequelize = db.sequelize;


/**
 * 关系建立
 */

const article = Sequelize.import('./article');
article.sync({force: true});

const user = Sequelize.import('./user');
user.sync({force: true});

