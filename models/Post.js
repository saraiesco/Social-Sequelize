const {db, Datatypes, Model} = require("../db/connection");

class Post extends Model {};

Post.init({
    title: Datatypes.STRING,
    body: Datatypes.STRING,
    createdAt: Datatypes.STRING,
},{
    sequelize: db,
    modelName: "Post"
});

db.sync();

module.exports = Post;