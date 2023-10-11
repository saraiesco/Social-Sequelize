const path = requre("path");
const {Sequelize, Datatypes , Model} = require("sequelize");

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
});


module.exports = {
    db,
    Datatypes,
    Model,
};