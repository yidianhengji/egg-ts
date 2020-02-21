import { Service } from 'egg';


export default class SysRole extends Service {

  public async queryAll(params: any) {
    const ctx = this.ctx;
    const isDelete = params.isDelete ? params.isDelete : 1;
    const query = {
      where: {
        isDelete: isDelete,
      },
      limit: params.pageSize, offset: params.pageNum * params.pageSize,
      order: [['createTime', 'DESC']]
    };
    return await ctx.model.SysRole.findAll(query);
  }

  public async save(params: any) {
    const ctx = this.ctx;
    return await ctx.model.SysRole.create(params);
  }

  public async update(params: any, options: any) {
    const ctx = this.ctx;
    return await ctx.model.SysRole.update(params, options);
  }
}
