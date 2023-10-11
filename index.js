const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here

// A User can have one Profile and vice versa.
User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasOne(User);
User.belongsTo(Profile);
// A User can have many Post instances, but a Post can only have one User.
User.hasMany(Post);
Post.belongsTo(User);

Post.hasOne(User);
User.belongsTo(Post);
// A Post can have many Comment instances, but a Comment can only have one Post.
Post.hasMany(Comment);
Comment.belongsTo(Post);

Comment.hasOne(Post);
Post.belongsTo(Comment);
// A User can have many Like instances and vice versa.
User.belongsToMany(Like, {through: "UserLikes"});
Like.belongsToMany(User, {through: "UserLikes"});



module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}