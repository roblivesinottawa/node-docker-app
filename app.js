const express = require('express')
const app = express()
const router = express.Router()

const path = __dirname + '/views/'

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening at localhost:${port}`))


