const sequelize = require('sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const Checkpoint = db.define('checkpoint',{
    checkpoint_id:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    checkpoint_name:{
        type:sequelize.STRING
    },
    checkpoint_addr:{
        type:sequelize.STRING
    },
    admin_name:{
        type:sequelize.STRING
    },
    admin_phone:{
        type:sequelize.STRING
    },
    province_id:{
        type:sequelize.INTEGER
    },
    amphure_id:{
        type:sequelize.INTEGER
    },
    district_id:{
        type:sequelize.INTEGER
    },
    postcode:{
        type:sequelize.STRING
    }
    
});

module.exports = Checkpoint;