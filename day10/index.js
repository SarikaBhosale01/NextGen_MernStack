const express = require('express')
const app = express()
const cors= require('cors')
app.use(cors());
const mongoose = require('mongoose');
const Moviemodel = require('./model/Moviemodel');
app.use(express.json());
const port = 3000

app.get('/getmoviedata',async(req,res)=>{
    try{
        const newdata = await Moviemodel.find({});
        res.json(newdata);
        console.log(newdata);
    }
    catch(err){
  console.log("data not recieved")
    }
});

app.post('/aboutmovie',async(req,res)=>{
  try
{
  const newdata=new Moviemodel(req.body);
  await newdata.save();
  res.send("saved");
}
  catch(error)
{
  console.log("not saved");
}
}
)

mongoose.connect("mongodb+srv://srsarikabhosale:1%40sarika02@cluster1.8cmbg.mongodb.net/").then(()=>
console.log("mongodb database connected successfully"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
