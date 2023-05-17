const express = require('express')
const cors = require('cors')
const indexRouter = require('./router/indexRouter')
const BoardRouter = require('./router/BoardRouter')
const app = express()
app.use('/', indexRouter)
app.use('/board', BoardRouter)

require('./db/batabase');

const port = 8000

app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



