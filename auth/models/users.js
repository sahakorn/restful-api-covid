const sequelize = require('sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const User = db.define('user_auth',{
    user_id:{
        type:sequelize.INTEGER,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    email:{
        type:sequelize.STRING
    },
    phone:{
        type:sequelize.STRING
    },
    password:{
        type:sequelize.INTEGER
    },
    prename:{
        type:sequelize.STRING
    },
    firstname:{
        type:sequelize.STRING
    },
    lastname:{
        type:sequelize.STRING
    }
    
});

module.exports = User;