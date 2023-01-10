require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongodbURL = process.env.DATABASE_URL;
const mongoose = require("mongoose");
const User = require("./models/users");
mongoose.set("strictQuery", true);
const jsonParser = bodyParser.json();
const { v4: uuidv4 } = require("uuid");
const dataBase = mongoose.connect(mongodbURL);
const blogRoute= require("./routes/blogs");
app.use("/blogs",blogRoute)


app.post("/signup", jsonParser, async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).send({ error: "User Already Exist,Please Login" });
  }
  const authToken = uuidv4();
  try {
    const newUser = new User({ ...req.body, authToken: [authToken] });
    newUser.save();
  } catch {
    (error) => {
      return res.status(400).send(error).status(400);
    };
  }
  res.send({ msg: "User Created Successfully", authToken });
});

app.post("/signin", jsonParser, async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    return res
      .status(400)
      .send({ msg: "User not found please enter valid details" });
  }
  if (existingUser.password !== req.body.password) {
    return res.status(400).send({ error: "Invalid Password" });
  }
  const authToken = uuidv4();
  existingUser.authToken.push(authToken);
  await existingUser.save();
  return res.send({ msg: "Login success", authToken });
});

app.get("/",(req,res)=>{
  res.send("I AM SERVER")
})
 
dataBase
  .then(() => {
    app.listen(5000, (req, res) => {
      console.log("Server Started");
    });
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });
