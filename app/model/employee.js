"use strict";
const {
    detailOption
} = require('../constant/tableOptions')
module.exports = (app) => {
    const mongoose = app.mongoose;
    const model = detailOption.map(item => ({
        [item.prop]: item.type
    }))
    const EmployeeSchema = new mongoose.Schema(model);

    return mongoose.model('Employee', EmployeeSchema, 'employee');

}