'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({})
var Employee = mongoose.model('Employee', EmployeeSchema)
// console.log('我是你爸爸')

module.exports = Employee