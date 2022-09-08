const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize({
  database: 'heroku_751fd57f69c8390',
  host: 'us-cdbr-east-06.cleardb.net',
  username: 'b6169c37db081c',
  password: '57385a1e',
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