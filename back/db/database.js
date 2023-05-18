const Sequelize = require('sequelize');

const dbinfo = {host:"localhost", dialect: "mysql"}
const sequelize = new Sequelize("MH","root","12345678",dbinfo);

const User = sequelize.define('User',{
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
});

sequelize.sync({force:true})
.then(result => console.log("잘되는걸까 케케케"));

module.exports = {User}