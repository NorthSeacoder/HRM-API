const miBack = require('../middleware/mi-back')
const mongoose = require("mongoose");
const Employee = mongoose.model('Employee');
const EmployeeDetail = mongoose.model('EmployeeDetail');
module.exports = {
    index: async(ctx, next) => {
      // console.log(ctx)
    },
    createEmployee: async(ctx, next) => {
        // console.log(ctx)
    },
    addEmployeeList: async(ctx, next) => {
        // console.log(ctx)
    },
    deleteEmployee: async(ctx, next) => {
        // console.log(ctx)
    },
    updateEmployee: async(ctx, next) => {
        // console.log(ctx)
    },
    getEmployeeList: async(ctx, next) => {
        // console.log(ctx)
    },
    getEmployeeDetail: async(ctx, next) => {
        // console.log(ctx)
    },
  }