const express = require('express');
const app = express();
const port = 3001;

app.get("/",(req,res)=>{
    res.send("text");
})

app.listen(3001,()=>{
    console.log("server running on 3001");
})
