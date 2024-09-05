const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/emsdb')
const db = mongoose.connection

db.on('error',() => {
  console.log('Database connection failed!')
})

db.once('open',() => {
  console.log('Database connection success')
})

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/',(req,res) => {
  res.render('index')
})

const PORT = process.env.PORT || 4200

app.listen(PORT, () => {
  console.log(`Server are listening on port ${PORT}`)
})

