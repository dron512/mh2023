const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("text");
})

app.listen(port, () => {
    console.log("server running on 3001");
})


console.log("node");