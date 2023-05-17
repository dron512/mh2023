const express = require('express');
const cors = require('cors');

const indexRouter = require('./router/inedexRouter');

const app = express();
const port = 3001;

// node app.js
app.use(cors());
app.use("/",indexRouter);

app.listen(port, () => {
    console.log("server running on 3001");
})