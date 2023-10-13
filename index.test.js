const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const {comments} = require("./seed/comments.json");
const {likes} = require("./seed/likes.json");
const {posts} = require("./seed/posts.json");
const {profiles} = require("./seed/profiles.json");
const {users} = require("./seed/users.json");



describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    //models
    test("can create User", async () => {
        await User.bulkCreate(users)
        const foundUser = await User.findByPk(1);
        expect(foundUser).toEqual(expect.objectContaining[users[0]]);
     });

     test("Can create Profile", async () => {
        await Profile.bulkCreate(profiles)
        const foundProfile = await Profile.findByPk(2);
        expect(foundProfile).toEqual(expect.objectContaining[profiles[1]]);
     });

     test("Can create Post", async () => {
        await Post.bulkCreate(posts)
        const foundPost = await Post.findByPk(1);
        expect(foundPost).toEqual(expect.objectContaining[posts[0]]);
     });

     test("Can create Like", async () => {
        await Like.bulkCreate(likes)
        const foundLike= await Like.findByPk(1);
        expect(foundLike).toEqual(expect.objectContaining[likes[0]]);
     });

     test("can create comment", async () => {
        await Comment.bulkCreate(comments)
        const foundComment = await Comment.findByPk(1);
        expect(foundComment).toEqual(expect.objectContaining[comments[0]]);
     });

     //associations
    test("User has one Profile, vice versa", async () => {
        const user = await User.findByPk(1);
        await user.setProfile(1);
        const profile = await user.getProfile();
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