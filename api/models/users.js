const sequelize = require('Sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const Users = db.define('users',{
    user_id:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    username:{
        type:sequelize.STRING
    },
    password:{
        type:sequelize.STRING
    },
    prename:{
        type:sequelize.STRING
    },
    firstname:{
        type:sequelize.STRING
    },
    lastname:{
        type:sequelize.INTEGER
    },
    position:{
        type:sequelize.INTEGER
    },
    email:{
        type:sequelize.INTEGER
    },
    phone:{
        type:sequelize.STRING
    },
    checkpoint_id:{
        type:sequelize.INTEGER
    }
    
});

module.exports = Users;