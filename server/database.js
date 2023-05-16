const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors())
require('./routes')(app);
const port = 8081;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
  });

const sequelize = new Sequelize('BeSpokedbikes', 'surgosan', 'Rosselin06!', {
    host: 'localhost',
    dialect:'mysql'
  });

async function init()
{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

init(); //test if we have a connection


sequelize.sync()
.then(() => {
    console.log("Synced");

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})
    