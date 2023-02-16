const express = require("express");
const { UserModel } = require("../models/user.model");
const { PostModel } = require("../models/post.model");
const {CategoryModel}=require("../models/category.model")
const CategoryRoute = express.Router();

