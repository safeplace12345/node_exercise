const { DataTypes } = require("sequelize");
const sq = require("../config/db");

const userSchema = sq.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true        
    },
    name: {
        type: DataTypes.STRING,
    },
    surName: {
        type: DataTypes.STRING,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
    },
    sex: {
        type: DataTypes.STRING,
    },
    userName: {
        type: DataTypes.STRING,
    },
});

userSchema.sync().then(() => {
    console.log("userSchema sync complete")
})

module.exports = userSchema
