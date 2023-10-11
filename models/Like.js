const {db, Datatypes, Model} = require("../db/connection");

class Like extends Model {};

Like.init({
    reactionType: Datatypes.STRING,
    createdAt: Datatypes.STRING,
},{
    sequelize: db,
    modelName: "User"
});

db.sync();

module.exports = Like;