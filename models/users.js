const { DataTypes } = require("sequelize");
const sq = require("../config/db");
const messagesSchema = require('./messages')

const userSchema = sq.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    surName: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,        
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

userSchema.hasMany(messagesSchema)
messagesSchema.belongsTo(userSchema)

userSchema.sync().then(() => {
    console.log("userSchema sync complete")
})

module.exports = userSchema
