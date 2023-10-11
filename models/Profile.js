const {db, Datatypes, Model} = require("../db/connection");

class Profile extends Model {};

Profile.init({
    bio: Datatypes.STRING,
    profilePicture: Datatypes.STRING,
    birthday: Datatypes.STRING,
},{
    sequelize: db,
    modelName: "Profile"
});

db.sync();


module.exports = Profile;