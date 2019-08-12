'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var EmployeeDetailSchema = new Schema({})
var EmployeeDetail = mongoose.model('EmployeeDetail', EmployeeDetailSchema)

module.exports = EmployeeDetail