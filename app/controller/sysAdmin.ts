import { Controller } from 'egg';
import { Results } from '../utils/results';
import { CONSTANT } from '../utils/constant';
import md5 = require('md5');
import uuid = require('uuid');

export default class SysAdminController extends Controller {
  public async login() {
    const { ctx } = this;
    ctx.body = await ctx.service.sysAdmin.login(ctx.request.body);
  }

  public async queryAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.sysAdmin.queryAll(ctx.request.body);
  }

  public async save() {
    const { ctx } = this;
    const params: any = {
      uuid: uuid(),
      password: md5(CONSTANT.PASSWORD),
      status: 1,
      createTime: new Date(),
      modifyTime: new Date(),
      ...ctx.request.body
    }
    const data = await this.service.sysAdmin.save(params);
    if (data) {
      ctx.body = new Results().addSuccess(data);
    } else {
      ctx.body = new Results().errer();
    }
  }

  public async update() {
    const { ctx } = this;
    if (ctx.request.body.uuid) {
      if (ctx.request.body.password) {
        ctx.request.body.password = md5(ctx.request.body.password);
      }
      const params = {
        ...ctx.request.body,
        modifyTime: new Date()
      };
      const options = {
        where: {
          uuid: ctx.request.body.uuid,
        },
      };
      const data = await this.service.sysAdmin.update(params, options);
      if (data) {
        ctx.body = new Results().updateSuccess();
      } else {
        ctx.body = new Results().errer();
      }
    } else {
      ctx.body = new Results().uuidErrer()
    }
  }
}
