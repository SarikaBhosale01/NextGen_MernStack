const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.json());
const Fashionstoremodel = require('./models/Fashionstoremodel');

app.get('/getFashionstoredata',async(req,res)=>{
    try{
        const newdata = await Fashionstoremodel.find({});
        res.json(newdata);
        console.log(newdata);
    }
    catch(err){
  console.log("data not recieved")
    }
});


mongoose.connect("mongodb+srv://srsarikabhosale:1%40sarika02@cluster1.8cmbg.mongodb.net/").then(()=>
console.log("mongodb database connected successfully"));







// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})