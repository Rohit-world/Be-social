
const { default: mongoose } = require("mongoose");
const postScema=mongoose.Schema({
    title:{
       require:true,
       type: String
    },
    description:{
        require:true,
        type:String
        
    },
    photo:{
        require:false,
        type:String

    },
    category:{
        require:true,
       
        type:Array

    }
    ,username:{
        type:String,
        require:true
    },
    postTime:{
        type:String,
        default:Date.now()
    }
})

const PostModel=mongoose.model("post",postScema)
module.exports={PostModel}