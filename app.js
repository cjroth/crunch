const fs = require('fs')
const express = require('express')

const app = express()

app.use(express.static('public'))
app.use('/libraries', express.static('bower_components'))

app.get('/', (req, res) => {
    let data = fs.readFileSync('./index.html')
    res.type('html').send(data)
})

app.get('/datasets/349d49/variables/hier/', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./fixtures/order.json'))
    res.json(data)
})

app.get('/datasets/349d49/variables/', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./fixtures/variables.json'))
    res.json(data)
})

app.listen(3000)
