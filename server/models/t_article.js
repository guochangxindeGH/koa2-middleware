module.exports = function(sequelize,DataTypes){
    return sequelize.define('article',{
        id:{
            type: DataTypes.INTEGER(20),
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //文章标题
        title:{
            type: DataTypes.STRING(40),
            allowNull: true,
            field: 'title'
        },
        //作者
        author:{
            type: DataTypes.STRING(40),
            allowNull: true,
            field: 'author'
        },
        //内容
        content:{
            type: DataTypes.STRING(40),
            allowNull: true,
            field:'content'
        },
        //文章分类
        category:{
            type: DataTypes.STRING(40),
            allowNull: true,
            field: 'category'
        },
        // 创建日期
        createdAt:{
            type: DataTypes.DATE,
            allowNull: true
        },
        // 更新日期
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        tableName: 't_article',
        timestamps: false
    });
}
