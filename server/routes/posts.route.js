const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");
const { PostModel } = require("../models/post.model");
const PostRoute = express.Router();

//new post by user
PostRoute.post("/", async (req, resp) => {
  const newPost = new PostModel(req.body);

  try {
    const result = await newPost.save();

    resp.status(200).json(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

//update post by the user

PostRoute.patch("/:id", async (req, resp) => {
  try {
   const post = await PostModel.findById(req.params.id);
    if (post.username == req.body.username) {
      try {
        const updatePost = await PostModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );

        resp.status(200).json(updatePost);
      } catch (err) {
        resp.status(401).json(err);
      }
    } else {
      resp.status(401).json("You Cannot Update this post");
    }
  } catch (error) {
    resp.status(401).json(error);
  }
});

//delete post by the user

PostRoute.delete("/:id", async (req, resp) => {
    try {
     const post = await PostModel.findById(req.params.id);
      if (post.username == req.body.username) {
        try {
         await PostModel.findByIdAndDelete(
            req.params.id
          );
  
          resp.status(200).json("post Delted successfull");
        } catch (err) {
          resp.status(401).json(err);
        }
      } else {
        resp.status(401).json("You Cannot Delete this post");
      }
    } catch (error) {
      resp.status(401).json(error)
    }
  });

module.exports = { PostRoute };
