const express = require("express");
const { QueryTypes } = require("sequelize");
const userSchema = require("../models/users");
const messagesSchema = require("../models/messages");
const { ErrorFriendlyMsg, SuccessMsg } = require("../constants");

const usersRouter = express.Router({
  mergeParams: true,
});

usersRouter.get("/queue", async (req, res, n) => {
  const { sender, receiver } = req.query;

  try {
    const queue = await userSchema.sequelize.query(
      `SELECT sender, receiver, name,  public."Messages".id, content, "timeStamp"
      FROM public."Messages" left join public."Users" on sender = public."Users".id where
      sender=${sender} and receiver =${receiver} or sender=${receiver} and receiver =${sender} order by "timeStamp" DESC;`,
      { type: QueryTypes.SELECT }
    );

    return res.status(200).json({
      message: SuccessMsg,
      queue,
    });
  } catch (error) {
    console.log(ErrorFriendlyMsg, error);
  }
});

usersRouter.get("/favorites/:uId", async (req, res, n) => {
  const { uId } = req.params;

  try {
    const users = await messagesSchema.sequelize.query(
      `SELECT name,  public."Users".id, "timeStamp", "surName", "userName"
    FROM public."Messages" left join public."Users" on receiver = public."Users".id where sender=${uId} order by "timeStamp" DESC;`,
      { type: QueryTypes.SELECT }
    );

    return res.status(200).json({
      message: SuccessMsg,
      users,
    });
  } catch (error) {
    console.log(ErrorFriendlyMsg, error);
  }
});

usersRouter.get("/:id", async (req, res, n) => {
  const { id } = req.params;

  try {
    return await userSchema.findOne({
      where: {
        id: id
      }
     }).then((user) => {
      return res.status(200).json({
        message: SuccessMsg,
        user,
      });
    });
  } catch (error) {
    console.log(ErrorFriendlyMsg, error);
  }
});

module.exports = usersRouter;
