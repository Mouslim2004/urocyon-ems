const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
const app = express()

mongoose.connect('mongodb://localhost:27017/emsdb')
const db = mongoose.connection

db.on('error',() => {
  console.log('Database connection failed!')
})

db.once('open',() => {
  console.log('Database connection success')
})

const Employee = require('./model/employee')

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}))

app.use(flash())
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', async(req,res) => {
  const show = await Employee.find()
  res.render('index', {show: show})
})

app.post('/',(req,res) => {
  let data = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    contact: req.body.contact,
    salary: req.body.salary,
    address: req.body.address,
    date: req.body.date
  }
   if(data.name == "" || data.lastname == "" ||
    data.email == "" || data.contact == "" ||
    data.salary == "" || data.address == "" ||
    data.date == ""
   ) {
    req.flash('error','Please! Fill the form')
    return res.redirect('/')
   } else {
    Employee.insertMany([data])

    res.render('index')
    console.log(data)
   }
})

app.delete('/name', async (req,res) => {
  let destroy = await Employee.find({name: req.params.name})
  console.log(destroy)
})


const PORT = process.env.PORT || 4200

app.listen(PORT, () => {
  console.log(`Server are listening on port ${PORT}`)
})

/*
<div class="row mb-3 text-center">
  <div class="col">
    <% if (message.length > 0) { %>
      <span class="error-log " style="color: red;"><%= message[0] %></span> <br>
    <% } %>
  </div>
</div>
 <% for(var i=0; i< todos.length; i++){ %>
                  <li><%= todos[i].item %></li>
            <% } %>
 */