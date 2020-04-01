const sequelize = require('Sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const Districts = db.define('districts',{
    id:{
        type:sequelize.INTEGER,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    zip_code:{
        type:sequelize.STRING
    },
    name_th:{
        type:sequelize.STRING
    },
    name_en:{
        type:sequelize.STRING
    },
    amphure_id:{
        type:sequelize.INTEGER
    }
    
});

module.exports = Districts;