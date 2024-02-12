const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("PostgreSQL 15", "postgres", "root", {
  host: "postgres_db",
  dialect: "postgres",
});

const tDbConn = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected :)");
  } catch (error) {
    console.log("Disconnected )", error);
  }
};

tDbConn()
module.exports = sequelize
