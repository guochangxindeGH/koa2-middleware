const Sequelize = require('sequelize');
const mySequelize = new Sequelize('gcx','root','12345678',{
    host:'localhost',
    dialect:'mysql',  // 指定数据库的类型，需要先安装mysql2
    logging: true,   //默认值为true,是否在控制台中显示具体的mysql操作
    operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8_general_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区  一定要这么设置才能按照北京时间来记录时间相关的数据
});

// force: true 当我们添加字段的时候数据库会自动删除原先的表格并更新字段,开发阶段可以设置为true
// 注意在生产环境下千万不要将其设置为true，它会把所有的记录都删除掉
// 所以我们还是设置为false比较安全，添加字段，我们还是手动删除原先的表格然后刷新加载比较好
mySequelize.sync({
    force: true
})

module.exports = mySequelize
