const {db, Datatypes, Model} = require("../db/connection");

class Comment extends Model {};

Comment.init({
    body: Datatypes.STRING,
    createdAt: Datatypes.STRING,
},{
    sequelize: db,
    modelName: "Comment"
});

db.sync();

module.exports = Comment;