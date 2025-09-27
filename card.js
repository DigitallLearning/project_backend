const mongoose=require("mongoose")
const cards=new mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    image:String
})
module.exports=mongoose.model("card",cards);