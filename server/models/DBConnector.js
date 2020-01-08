/*
* 数据库表关系建立
*/
const Mysql = require('./db');

//表
const User = require('./user');//用户表
// const AdminUser = require('./adminUser');//管理员表
// const UserInfo = require('./userInfo');//用户信息表
// const Article = require('./article');//文章表
// const Category = require('./category');//文章类别表
// const Attachment = require('./attachment');//文章附件表

/**
 * 关系建立
 */

//用户-用户资料
// User.hasOne(UserInfo); //1:1

//用户-文章
// User.hasMany(Article); //1:N
// Article.belongsTo(User); //1:1

//文章-分类 （定义中间表ArticleCategory 实现多对多）
// Article.belongsToMany(Category,{through: 'ArticleCategory'}); //N:N
// Category.belongsToMany(Article,{through: 'ArticleCategory'}); //N:N


//基于sequelize自动创建表//【！！注意 首次执行完请注释掉该段代码 ！！】
Mysql.sync({
    force: true,//是否清空数据库表
}).then(function() {
    console.log('ok');
});

module.exports = {
    User: User,
};
