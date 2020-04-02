const sequelize = require('Sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const QuarantinePlace = db.define('quarantine_place',{
    place_id:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    place_name:{
        type:sequelize.STRING
    },
    total_bed:{
        type:sequelize.INTEGER
    }
    
});

module.exports = QuarantinePlace;