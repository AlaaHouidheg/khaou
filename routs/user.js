const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  registerRules,
  loginRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

// register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password, isAdmin, photo } = req.body;
  try {
    const newUser = new User({
      name,
      lastname,
      email,
      password,
      isAdmin,
      photo,
    });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "user already exist" });
    }
    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;

    // generate a token

    // save the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user saved..",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send(" can not save the user...");
  }
});
// login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await User.findOne({ email });
    // if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }

    // creer un token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });

    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "can not get the user" });
    console.log(error);
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

// router.get("/", (req, res) => {
//   res.send("hello word");
// });

router.get("/all", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ result, msg: " All users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = router;
