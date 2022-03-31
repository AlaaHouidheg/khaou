console.clear();

const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbconnect");
const app = express();
connectDB();

// routes
app.use(express.json());
app.use("/user", require("./routs/user"));
app.use("/cours", require("./routs/Cours"));
app.use("/message", require("./routs/message"));
// app.use("/Cours", require("./routs/Cours"));

const Port = process.env.PORT;
app.listen(Port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${Port}`)
);
