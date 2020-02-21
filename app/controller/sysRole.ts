import { Controller } from 'egg';
import { Results } from '../utils/results';
import uuid = require('uuid');

export default class SysRoleController extends Controller {

  public async queryAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.sysRole.queryAll(ctx.request.body);
  }

  public async save() {
    const { ctx } = this;
    const params: any = {
      uuid: uuid(),
      isDelete: 1,
      createTime: new Date(),
      modifyTime: new Date(),
      ...ctx.request.body
    }
    const data = await this.service.sysRole.save(params);
    if (data) {
      ctx.body = new Results().addSuccess(data);
    } else {
      ctx.body = new Results().errer();
    }
  }

  public async update() {
    const { ctx } = this;
    if (ctx.request.body.uuid) {
      const params = {
        ...ctx.request.body,
        modifyTime: new Date()
      };
      const options = {
        where: {
          uuid: ctx.request.body.uuid,
        },
      };
      const data = await this.service.sysRole.update(params, options);
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
