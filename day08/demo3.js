// server.mjs
//import { createServer } from 'node:http';
var http= require('http')
var fs=require('fs');
var os=require('os');

console.log(os.freemem());
console.log(os.cpus());
console.log(os.arch())
console.log(os.hostname())
console.log(os.machine());
console.log(os.totalmem());
console.log(os.userInfo());







console.warn("Danger")
console.log("Normal log");
console.assert(true,"transaction completed");
console.assert(false,"transaction failed");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
 // res.end('{"id":1,"price":"200","string":"sarika","title":"school-bag"}')
 if(req.url==="/"){
    //res.write("this is default page")
    fs.readFile("note.txt",(error,data)=>{
        res.write(data);
        res.end();
    })
    //res.end();
 }
//  if(req.url==="/product"){
//     res.write("this is product page")
//     res.end();
//  }
//  if(req.url==="/user"){
//     res.write("this is user page")
//     res.end();
//  }
//  if(req.url==="/web"){
//     res.write('"id":1,"name":"sarika","title":"shoping-')
//     res.end();
//  }
//  if(req.url==="/e-commerce"){
//     res.write("this is ecom page")
//     res.end();
//  }
});
    

  

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.4', () => {
  console.log('Listening on 127.0.0.4:3000');
});

// run with `node server.mjs`
