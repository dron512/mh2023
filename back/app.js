const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
// node app.js
app.use(cors());

app.get("/",(req,res)=>{
    res.send("text");
})

app.listen(3001,()=>{
    console.log("server running on 3001");
})
