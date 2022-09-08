const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize({
  database: 'heroku_3d57a2ba8a3b939',
  host: 'us-cdbr-east-06.cleardb.net',
  username: 'b16b85f7e136ff',
  password: '09807468',
  dialect: 'mysql'
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