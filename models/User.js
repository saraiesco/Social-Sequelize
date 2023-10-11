const {db, Datatypes, Model} = require("../db/connection");

class User extends Model {};

User.init({
    name: Datatypes.STRING,
    email: Datatypes.STRING,
},{
    sequelize: db,
    modelName: "User"
});

db.sync();

module.exports = User;