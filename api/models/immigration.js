const sequelize = require('sequelize')
// load Sequelize for mysql model.
const db = require('../../config/cmysql')
// Create Model for user_auth (User Data)
const Immigration = db.define('immigration',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // Define the Not null data *important
        primaryKey: true, // Define the primaryKey    *imprtant
    },
    pid:{
        type:sequelize.STRING
    },
    firstname:{
        type:sequelize.STRING
    },
    lastname:{
        type:sequelize.STRING
    },
    gender:{
        type:sequelize.INTEGER
    },
    birthdate:{
        type:sequelize.DATE
    },
    age:{
        type:sequelize.INTEGER
    },
    indate:{
        type:sequelize.DATE
    },
    intime:{
        type:sequelize.TIME
    },
    outdate:{
        type:sequelize.DATE
    },
    outtime:{
        type:sequelize.TIME
    },
    province:{
        type:sequelize.INTEGER
    },
    amphure:{
        type:sequelize.INTEGER
    },
    district:{
        type:sequelize.INTEGER
    },
    zipcode:{
        type:sequelize.TEXT
    },phone:{
        type:sequelize.TEXT
    },
    enter_type:{
        type:sequelize.INTEGER
    },
    vehicle_type:{
        type:sequelize.INTEGER
    },
    license_plate:{
        type:sequelize.STRING
    },
    passenger_count:{
        type:sequelize.INTEGER
    },
    dest_province:{
        type:sequelize.INTEGER
    },
    dest_amphure:{
        type:sequelize.INTEGER
    },
    dest_district:{
        type:sequelize.INTEGER
    },
    dest_place_name:{
        type:sequelize.TEXT
    },
    quarantine_place:{
        type:sequelize.INTEGER
    },
    quarantine_days:{
        type:sequelize.INTEGER
    },
    quarantine_end:{
        type:sequelize.DATE
    },
    checkpoint:{
        type:sequelize.INTEGER
    },
    status:{
        type:sequelize.INTEGER
    },
    update_by:{
        type:sequelize.INTEGER
    }
    
});

module.exports = Immigration;