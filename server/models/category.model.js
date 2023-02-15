
const { default: mongoose } = require("mongoose");

const categoryScema=mongoose.Schema({
    name:{
        require:true,
        type:String
    }
})

const CategoryModel=mongoose.model("category",categoryScema)
module.exports={CategoryModel}