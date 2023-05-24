const express = require('express');
const cors = require('cors');

const indexRouter = require('./router/inedexRouter');
const boardRouter = require('./router/boardRouter')

require('./db/database');


const app = express();
const port = 3001;

// node app.js
app.use(cors());

app.use("/",indexRouter);
app.use("/board",boardRouter);

app.listen(port, () => {
    console.log("server running on 3001");
})