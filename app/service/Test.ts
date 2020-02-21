import { Service } from 'egg';

export default class Test extends Service {

  public async sayHi() {
    const ctx = this.ctx;
    return await ctx.model.SysAdmin.findAll();
  }
}
