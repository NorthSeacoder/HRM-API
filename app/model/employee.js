"use strict";
const {
    detailOption,
    listOption
} = require('../constant/tableOptions')
module.exports = (app) => {
    const mongoose = app.mongoose;
    const model = detailOption.map(item => ({
        [item.prop]: item.type
    }))
    const EmployeeSchema = new mongoose.Schema(model);

    return mongoose.model('EmployeeDetail', EmployeeSchema, 'employee');
}
module.exports = (app) => {
    const mongoose = app.mongoose;
    const model = listOption.map(item => ({
        [item.prop]: item.type
    }))
    const EmployeeSchema = new mongoose.Schema(model);

    return mongoose.model('EmployeeList', EmployeeSchema, 'employee');
}