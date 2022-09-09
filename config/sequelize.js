const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize({
  database: 'EEwafzh6yE',
  host: 'remotemysql.com',
  username: 'EEwafzh6yE',
  password: 'pV4Yy5d0D7',
  port:3306,
  dialect: 'mysql',
  // database: 'eduwork-crud-v2',
  // host: 'localhost',
  // username: 'root',
  // password: 'root',
  // dialect: 'mysql'
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;