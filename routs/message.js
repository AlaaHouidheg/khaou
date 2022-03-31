const express = require("express");
const Message = require("../models/message");

// initialisation
const MessageRouter = express.Router();
MessageRouter.get("/all", async (req, res) => {
  try {
    let result = await Message.find();
    res.send({ result, msg: " All message" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
MessageRouter.post("/add", async (req, res) => {
  try {
    let newCours = new Message({ ...req.body });
    let result = await newCours.save();
    res.send({ result, msg: "sucefuly aded" });
    console.log(result);
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
module.exports = MessageRouter;
