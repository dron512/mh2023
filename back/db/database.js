const Sequelize = require('sequelize');

const dbinfo = {host:"localhost", dialect: "mysql"}
const sequelize = new Sequelize("mh2023","root","gur061201@",dbinfo);

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
.then(result => console.log("잘되는겨?"));

module.exports = {User}