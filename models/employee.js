'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({})
var Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee