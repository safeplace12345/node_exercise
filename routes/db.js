const express = require("express");
const path = require("path");
const readXlsx = require("read-excel-file/node");
const userSchema = require("../models/users");
const messagesSchema = require("../models/messages");
const { ErrorFriendlyMsg, SuccessMsg } = require("../constants");

const dbRouter = express.Router({
  mergeParams: true,
});

dbRouter.post("/", async (_, res, n) => {
  const xlsxPath = path.join(__dirname, "../", "seeds.xlsx");
  try {
    return await readXlsx(xlsxPath, { sheet: 1 })
      .then(async (rows) => {
        rows.map((row) => {
          userSchema.create({
            id: row[0],
            name: row[1],
            surName: row[2],
            dateOfBirth: row[3],
            sex: row[4],
            userName: row[5],
          });
        });
        return await readXlsx(xlsxPath, { sheet: 2 });
      })
      .then((rows) => {
        rows.map((row) => {
          messagesSchema.create({
            id: row[0],
            content: row[1],
            sender: row[2],
            receiver: row[3],
            seen: row[4],
            timeStamp: new Date(row[5]),
          });
        });
        return res.status(200).json(SuccessMsg);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json(ErrorFriendlyMsg);
  }
});

module.exports = dbRouter;
