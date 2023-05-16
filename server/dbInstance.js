const Sequelize = require('sequelize');

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