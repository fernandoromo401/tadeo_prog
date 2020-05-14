const dbConfig = require('../db_resources/db.config')

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.db , dbConfig.user, dbConfig.pass, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


/*
Dentro de DB asignamos el Objeto sequalize

const db = {
    Sequalize: Sequalize
};
*/
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Cuando pongo parentesis ejecuto como funcion con parametros
db.Subject = require('./subject.model.js')(sequelize, Sequelize)

module.exports = db;
