const mongoose = require('mongoose')
const Fashionstoreschema=new mongoose.Schema(
    {
      name:String,
      brand:String,
      size:String,
      price:Number,
      color:String,
      image:String
    }
)
const Fashionstoremodel=mongoose.model("Fashionstore info",Fashionstoreschema);
module.exports=Fashionstoremodel