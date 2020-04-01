const mysql = require('mysql');
const Sequelize = require('sequelize');
const host = require('./db')
var db = new Sequelize(host.database,host.user,host.password,
    {
        host:host.host,
        dialect:'mysql',
        pool:{
            max:100,
            min:0,
            acquire:300000,
            idle:100000
        },
        define:{freezeTableName:true,timestamps: false},
        logging: false

    });



module.exports = db;