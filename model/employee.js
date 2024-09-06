const mongoose = require('mongoose')
const { type } = require('os')
const Schema = mongoose.Schema

let employeeSchema = new Schema({
  name:{
    type: String
  },
  lastname:{
    type: String
  },
  email:{
    type: String
  },
  contact:{
    type: String
  },
  salary:{
    type: String
  },
  address:{
    type: String
  },
  date:{
    type: String
  }
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee