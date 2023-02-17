const { UserModel } = require("../models/user.model");

const SignupMiddleware = async (req, res, next) => {
  const { email, password ,username} = req.body;
  if (!email || !password||!username) return res.status(401).json("Invalid data recieved");
  
  
  const isPresent = await UserModel.findOne({ $or:[ 
    {email:email}, {username:username} 
  ]});

  if (isPresent )return res.status(401).json("User already exist");

  next();
};

module.exports = { SignupMiddleware };
