const mongoose=require("mongoose")
const register=new mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    mobile:String
})
module.exports=mongoose.model("register",register);