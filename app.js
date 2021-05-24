const express = require('express')
const app = express()
const router = express.Router()

const path = __dirname + '/views/'


router.use((req, res, next) => {
console.log(`'/' ${req.method}`)
})

router.get('/', (req, res) => res.sendFile(path + 'index.html'))

router.get('/heroes', (req, res) => res.sendFile(path + 'heroes.html'))

app.use(express.static(path))
app.use('/', router)




const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening at localhost:${port}`))


