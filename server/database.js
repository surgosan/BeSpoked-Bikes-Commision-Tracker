const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 8081;

const sequelize = new Sequelize('BeSpokedbikes', 'surgosan', 'Rosselin06!', {
    host: 'localhost',
    dialect:'mysql'
  });

async function init()
{``
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

init(); //test if we have a connection

app.get('/', (req, res) => {
    res.send('Get Request')
  })

app.post('/post', (req, res) => {
    res.send("Connection Complete! Msg: " + req.body.msg);
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

//module.exports = sequelize;