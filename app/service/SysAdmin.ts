import { Service } from 'egg';
import jwt = require('jsonwebtoken');
import md5 = require('md5');


export default class SysAdmin extends Service {
  public async login(params: any) {
    const ctx = this.ctx;
    const query = {
      where: {
        phone: params.phone,
        password: md5(params.password)
      }
    };
    const data = await ctx.model.SysAdmin.findAll(query);
    if (data) {
      const token = jwt.sign(JSON.stringify(data), ctx.app.config.jwt.secret, { expiresIn: ctx.app.config.jwt.expiresIn })
      return {
        token
      }
    }
  }

  public async queryAll(params: any) {
    const ctx = this.ctx;
    const status = params.status ? params.status : 1;
    const name = params.name ? params.name : '';
    const query = {
      where: {
        status: status,
        name: name
      },
      limit: params.pageSize, offset: params.pageNum * params.pageSize,
      order: [['createTime', 'DESC']]
    };
    return await ctx.model.SysAdmin.findAll(query);
  }

  public async save(params: any) {
    const ctx = this.ctx;
    return await ctx.model.SysAdmin.create(params);
  }

  public async update(params: any, options: any) {
    const ctx = this.ctx;
    return await ctx.model.SysAdmin.update(params, options);
  }
}
