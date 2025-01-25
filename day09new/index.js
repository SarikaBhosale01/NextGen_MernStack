const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World sarika!')
  res.sendStatus(200)
});
app.get('/product',(req,res)=>{
  res.send("product page");
  res.json({
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securePassword123",
    "age": 28,
    "address": {
      "street": "123 Main St",
      "city": "Springfield",
      "state": "IL",
      "zip": "62701"
    },
    "isActive": true
  }
  )
})
app.get('/download',(req,res)=>{
    res.download('./index.js');
})
app.post('/postdata',(req,res)=>{
    const{email,name}=req.body
    console.log(req.body);
    res.send("data received"+req.body)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 
})
     