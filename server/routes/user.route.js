const express= require("express");
const bcrypt=require("bcrypt");
const { UserModel } = require("../models/user.model");
const UserRoute=express.Router()
const {SignupMiddleware}=require("../middlewares/signupcheck")

UserRoute.post("/register",SignupMiddleware,async(req,resp)=>{
const {username,email,password}=req.body
try{
const salt =await bcrypt.genSalt(10)
const hassed_Password= await bcrypt.hash(req.body.password,salt)
const newUser= new UserModel({
    username:req.body.username,
    email:req.body.username,
    password:hassed_Password
})
const user=await newUser.save()
resp.status(200).json(user)

}catch(err){
resp.status(500).json(err)
console.log(err)
}
})


UserRoute.post("/login",async(req,resp)=>{
try {
const user= await UserModel.findOne({ username:req.body.username})    

if(!user){
   return resp.status(400).json("Wrong Credentials")
}   

const validateUser= await bcrypt.compare(req.body.password,user.password)
if(!validateUser){
 return resp.status(400).json("Wrong Credentials") 
} 

const {password,...other}=user._doc

resp.status(200).json(other)

}
 catch (error) {
    
resp.status(500).json(error)
 }
})


UserRoute.get("/:username",async(req,res)=>{
  const username=req.params.username
    
 try {
    const user=await UserModel.findOne({username})
    res.status(200).json(user)

 } catch (error) {
    
 }
})


module.exports={UserRoute}