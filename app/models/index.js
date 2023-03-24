const dbConfig = require("../config/db.config.js");
const Sqquelize = require("sequelize");
const sequelize = new Sqquelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
})

const db = {};
db.Sequelize = Sqquelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sqquelize);
db.scores = require("./score.model.js")(sequelize, Sqquelize);

module.exports = db;
