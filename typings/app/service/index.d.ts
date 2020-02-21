// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSysAdmin from '../../../app/service/SysAdmin';
import ExportSysRole from '../../../app/service/SysRole';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    sysAdmin: ExportSysAdmin;
    sysRole: ExportSysRole;
    test: ExportTest;
  }
}
