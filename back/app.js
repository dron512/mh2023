const express = require('express');
const cors = require('cors');

const indexRouter = require('./route/indexRouter');
const boardRouter = require('./route/boardRouter');

require('./db/database');

const app = express();
const port = 3001;

// node app.js
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.use("/",indexRouter);
app.use("/board",boardRouter);

app.listen(3001,()=>{
    console.log("server running on 3001");
})
