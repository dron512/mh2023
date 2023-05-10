
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.get("/", (req, res)=>{
    res.send("test");
})

app.listen(3000, () =>{
    console.log("server running on 3001");
})







