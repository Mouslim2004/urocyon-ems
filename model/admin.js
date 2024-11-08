const mongoose = require('mongoose')
const { type } = require('os')
const Schema = mongoose.Schema

let adminSchema = new Schema({
    email: {
      type: String, 
      require: true
    },
    password: {
      type: String,
      require: true
    },
    avatar: {
      type: String,
      require: true
    }
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin