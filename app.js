const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const auth = require('./auth/routers/auth');
const thai_addr = require('./thaiaddress/routes/thai_addr')
const checkpoint = require('./api/routes/checkpoint')
const users = require('./api/routes/users')
const vehicle = require('./api/routes/vehicle')
const quarantine_place = require('./api/routes/quarantine_place')
const immigration = require('./api/routes/immigration')
const db = require('./config/cmysql')
db.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});
// main function
app.use('/auth',auth);
app.use('/getlocation',thai_addr);
app.use('/checkpoint',checkpoint);
app.use('/users',users);
app.use('/vehicle',vehicle);
app.use('/quarantine-place',quarantine_place);
app.use('/immigration',immigration);
// Handle Error 
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
});


module.exports = app;