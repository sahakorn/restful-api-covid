const sequelize = require('sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const User = db.define('user',{
    station_key:{
        type:sequelize.STRING,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    station_name:{
        type:sequelize.STRING
    },
    station_type:{
        type:sequelize.STRING
    }
   
});

module.exports = User;