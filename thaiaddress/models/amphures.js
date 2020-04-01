const sequelize = require('Sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const Amphures = db.define('amphures',{
    id:{
        type:sequelize.INTEGER,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    code:{
        type:sequelize.STRING
    },
    name_th:{
        type:sequelize.STRING
    },
    name_en:{
        type:sequelize.STRING
    },
    province_id:{
        type:sequelize.INTEGER
    }
    
});

module.exports = Amphures;