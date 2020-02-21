// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSysAdmin from '../../../app/model/sysAdmin';
import ExportSysRole from '../../../app/model/sysRole';

declare module 'egg' {
  interface IModel {
    SysAdmin: ReturnType<typeof ExportSysAdmin>;
    SysRole: ReturnType<typeof ExportSysRole>;
  }
}
