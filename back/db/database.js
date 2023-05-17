const Sequelize = require("sequelize");

const dbinfo = {
  host: "localhost",
  dialect: "mysql",
};
const sequelize = new Sequelize("mh", "root", "1234", dbinfo);
const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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

sequelize.sync({force:true}).then(() => console.log("잘됨"));

module.exports = {User}