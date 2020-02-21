import { CONSTANT } from './constant'

export class Results {
  queryAllSuccess(data: any, total: number, pageSize: number, pageNum: number) {
    return {
      message: CONSTANT.QUERYMSG,
      status: CONSTANT.OKCODE,
      data: data,
      total: total,
      pageSize: pageSize,
      pageNum: pageNum
    }
  }
  addSuccess(data: any) {
    return {
      message: CONSTANT.PRESERVEMASG,
      code: CONSTANT.OKCODE,
      status: data
    }
  }
  updateSuccess() {
    return {
      message: CONSTANT.UPDATEMSG,
      status: CONSTANT.OKCODE,
    }
  }
  errer() {
    return {
      message: CONSTANT.SYSTEMEXCEPTION,
      status: CONSTANT.FAILCODE
    }
  }
  uuidErrer() {
    return {
      message: CONSTANT.UUIDEMPTY,
      status: CONSTANT.FAILCODE
    }
  }
}