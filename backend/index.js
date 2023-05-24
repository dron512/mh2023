const express = require('express')

const indexRouter = require('./router/indexRouter')
const BoardRouter = require('./router/BoardRouter')
const app = express()


require('./db/batabase');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors')

const port = 8000

app.use('/', indexRouter)
app.use('/board', BoardRouter)


app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



