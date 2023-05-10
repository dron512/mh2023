const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

