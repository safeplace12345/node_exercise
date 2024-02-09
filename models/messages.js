const { DataTypes } = require("sequelize");
const sq = require("../config/db");

const messagesSchema = sq.define("Message", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true        
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    sender: {
        type: DataTypes.INTEGER,
        allowNull: false,        
    },
    receiver: {
        type: DataTypes.INTEGER,
        allowNull: false,        
    },
    seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    timeStamp: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

messagesSchema.sync().then(() => {
    console.log("messagesSchema sync complete")
})

module.exports = messagesSchema
