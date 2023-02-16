const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");
const { PostModel } = require("../models/post.model");
const UserChange = express.Router();

UserChange.patch("/:id", async (req, resp) => {
  if (req.body.userID === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      resp.status(200).json(updateUser);
    } catch (error) {
      resp.status(401).json("You can't update the account");
    }
  }

  resp.status(401).json("You can't update the account");
});

UserChange.delete("/:id", async (req, resp) => {
  if (req.body.userID === req.params.id) {
    try {
      const user = await UserModel.findById(req.body.userID);

      try {
        await PostModel.deleteMany({ username: user.username });
        await UserModel.findByIdAndDelete(req.body.userID);
        resp.status(200).json("user deleted successfull..");
      } catch (error) {
        resp.status(500).json(error);
      }
    } catch (error) {
      resp.status(404).json("user not found");
    }
  } else {
    resp.status(401).json("You can't Delete this account");
  }
});

UserChange.get("/:id", async (req, resp) => {
  try {
    const user = await UserModel.findById(req.params.id);

    const { password, ...other } = user._doc;

    resp.status(200).json(other);
  } catch (error) {
    resp.status(401).json(error);
  }
});
module.exports = { UserChange };
