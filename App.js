const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const USER_MODEL = require("./API/Moduls/user.module");
const Routes = require("./API/Routes/Routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use('/' , Routes)

const url = "mongodb+srv://malek:123456780@test.c38nkyc.mongodb.net/";

mongoose.connect(url);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

// mongoose.connection.on("connected", () => {
//   console.log("mongo connected");
// });

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// mongoose.connection.useDb('prod')

app.get("/app", (req, res) => {
  res.status(200).json({
    user: "Malek",
  });
});

app.post("/whatsMyName", (req, res) => {
  const { name, lastName } = req.body;
  if (!name || !lastName) {
    res.status(701).json({
      error: true,
      errorMessage: "Name and LastName must be entered",
    });
  }

  res.status(200).json({
    myName: name,
    myLastName: lastName,
    myFullName: `${name} ${lastName}`,
  });
});



app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await USER_MODEL.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: true, errorMessage: e.message });
  }
});

app.post("/getUserByName", async (req, res) => {
  const { name } = req.body;
  try {
    const users = await USER_MODEL.find({name: req.body.name});
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: true, errorMessage: e.message });
  }
});

app.post("/getUserByID", async (req, res) => {
  const { id } = req.body;
  try {
    const users = await USER_MODEL.findById(id);
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: true, errorMessage: e.message });
  }
});

// app.method('route' , (req , res)=> controller(req , res) )

// app.use("/", Routs);

module.exports = app;
