const { Db } = require('mongodb');
const mongoose= require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/tutorial")
.then(()=>{
    console.log('mongodb is connected');
})
.catch(()=>{
    console.log('error');
})
const tutSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    
})
const collection= new mongoose.model('tut',tutSchema)

data={
    "name":"sarika"

};


collection.insertMany({data})