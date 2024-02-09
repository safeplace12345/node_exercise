const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "root", {
  host: "127.0.0.1",
  dialect: "postgres",
  port: 50000,
});

const tDbConn = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected :)");
  } catch (error) {
    console.log("Disconnected :)", error);
  }
};

module.exports = sequelize
