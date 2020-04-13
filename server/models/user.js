//定义User用户表
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'firstName'
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'lastName'
        },
        age: {
            type: DataTypes.INTEGER,
            field: 'age'
        },
        email: { //邮箱
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, //唯一
            validate: {//设置验证条件
                isEmail: true,// 检测邮箱格式 (foo@bar.com)
            },
        },
        password: { //密码
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: { //状态 0未激活邮箱、1已激活邮箱
            type: DataTypes.STRING(2),//限制字符个数
            defaultValue: "0", //默认值
        },
    }, {
        freezeTableName: true, //开启自定义表名
        tableName: 'user',//表名字
        timestamps: false, // 添加时间戳属性 (updatedAt, createdAt)
        // createdAt: 'createDate',// 将createdAt字段改个名
        // updatedAt: 'updateDate',// 将updatedAt字段改个名
        // indexes: [{ // 索引
        //     type: 'UNIQUE', //UNIQUE、 FULLTEXT 或 SPATIAL之一
        //     method: 'BTREE', //BTREE 或 HASH
        //     unique: true, //唯一 //设置索引是否唯一，设置后会自动触发UNIQUE设置//true:索引列的所有值都只能出现一次，即必须唯一
        //     fields: ['uuid'], //建立索引的字段数组。每个字段可以是一个字段名，sequelize 对象 (如 sequelize.fn)，或一个包含：attribute (字段名)、length (创建前缀字符数)、order (列排序方向)、collate (较验的字段集合 (排序))
        // }],
        comment:"User Table",//数据库表描述
    });
}
