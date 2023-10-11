const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const {comments} = require("./seed/comments.json");
const {likes} = require("./seed/likes.json");
const {posts} = require("./seed/posts.json");
const {profiles} = require("./seed/profiles.json");
const {users} = require("./seed/users.json");


describe('Social Sequelzie Associations Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
        await Comment.bulkCreate(comments);
        await Like.bulkCreate(likes);
        await Post.bulkCreate(posts);
        await Profile.bulkCreate(profiles);
        await User.bulkCreate(users)
    })

    // Write your tests here
    // add = append vs set = replace
    // set for one to one, add for one to many or many to many

    test("User has one Profile, vice versa", async () => {
        const user = await User.findByPk(1);
        await user.addProfile(1);
        const profile = await User.getProfile();
        console.log(JSON.stringify(user,null,2));
        // expect().toBe();
     });

     test("User has many Post, Post has one User ", async () => {
     });

     test("Post has many Comment, Comment has one Post", async () => {
     });

     test("User has many Like, Like has many User", async () => {
     });

})