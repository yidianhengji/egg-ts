import { Context } from 'egg';

export default function errorHandler(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx)
      const status = err.status || 500
      ctx.body = {
        status: status,
        message: err.message
      }
      ctx.logger.error(err)
    }
  }
}