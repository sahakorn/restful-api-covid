const sequelize = require('sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const Via = db.define('via',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    cid:{
        type:sequelize.STRING
    },
    fullname:{
        type:sequelize.STRING
    },
    sex:{
        type:sequelize.STRING
    },
    birth:{
        type:sequelize.DATE
    },
    addr:{
        type:sequelize.STRING
    },
    tel:{
        type:sequelize.INTEGER
    },
    come_from:{
        type:sequelize.INTEGER
    },
    vehicle:{
        type:sequelize.STRING
    },
    vehicle_no:{
        type:sequelize.STRING
    },
    total:{
        type:sequelize.NUMBER
    },
    via_type:{
        type:sequelize.STRING
    },
    stay_at:{
        type:sequelize.STRING
    },
    destination:{
        type:sequelize.STRING
    },
    date_back:{
        type:sequelize.DATE
    },
    date_back_confirm:{
        type:sequelize.BOOLEAN
    },
    temperature:{
        type:sequelize.NUMBER
    },
    symptom:{
        type:sequelize.STRING
    },
    note:{
        type:sequelize.STRING
    },
    station:{
        type:sequelize.STRING
    },
    d_record:{
        type:sequelize.STRING
    },
    d_update:{
        type:sequelize.STRING
    }

    
});

module.exports = Via;