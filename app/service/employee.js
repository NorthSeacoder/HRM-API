'use strict';
const {Service} = require('egg');

const EmployeeDetail = 'EmployeeDetail';

class EmployeeService extends Service {
    async create({_id, ...data} = {}) {
        console.log('service', _id, data);
        const model = this.ctx.model[EmployeeDetail];
        if (!data.userName) {
            return await model.create(data);
        }
        const find = await model.findOne({
            userName: data.userName
        });
        if (!find) {
            return await model.create(data);
        }
        return this.ctx.throw(417, '账号已存在！');
    }

    async insertList(data = {}) {
        const model = this.ctx.model[EmployeeDetail];
        return await model.insertMany(data);
    }

    async update({_id, ...update} = {}) {
        return this.ctx.model[EmployeeDetail].update(
            {
                _id
            },
            update
        );
    }

    async findList({size, pageNo, ...query} = {}) {
        const {QueryPage} = this.ctx.helper;
        const model = this.ctx.model[EmployeeDetail];
        const result = await QueryPage(
            {
                size,
                pageNo
            },
            () => {
                query = query || {};
                query.name = new RegExp(query.name);
                return model.find(query).sort({
                    _id: -1
                });
            }
        );
        return result;
    }
}
module.exports = EmployeeService;
