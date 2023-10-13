const {db, DataTypes, Model} = require("../db/connection");

class User extends Model {};

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
},{
    sequelize: db,
    modelName: "User"
});

db.sync();

module.exports = User;