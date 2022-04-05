const express = require("express");
const UserRouter = express.Router();
const User = require("../models/User");
//get all user
//method get
//req body
UserRouter.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ alluser: result, msg: "getted successfully" });
  } catch (error) {
    console.log(error);
  }
});

//add new user
//method post
//req.body

UserRouter.post("/add", async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    let result = newUser.save();
    res.send({ newUser: result, msg: "added successfully" });
  } catch (error) {
    console.log(error);
  }
});

//update
//put
UserRouter.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

//delete by id
//delete
// params/id
UserRouter.delete("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "deleeted successfully" });
  } catch (error) {}
});

module.exports = UserRouter;
