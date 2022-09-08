const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize({
  DB_NAME: 'heroku_751fd57f69c8390',
  DB_HOST: 'us-cdbr-east-06.cleardb.net',
  DB_USER: 'b6169c37db081c',
  DB_PASSWORD: '57385a1e',
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