//员工
'use strict';
const {
    Controller
} = require("egg");
const Modal = "employee"
class EmployeeController extends Controller {
    async create() {
        const data = this.ctx.request.body;
        // await this.ctx.validate(rule, data);
        this.ctx.body = await this.service[Modal].create(data)
    }

    async list() {
        this.ctx.body = await this.service[Modal].findList(this.ctx.query)
    }
}
module.exports = EmployeeController;