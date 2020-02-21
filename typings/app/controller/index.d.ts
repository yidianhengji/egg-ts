// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportSysAdmin from '../../../app/controller/sysAdmin';
import ExportSysRole from '../../../app/controller/sysRole';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    sysAdmin: ExportSysAdmin;
    sysRole: ExportSysRole;
  }
}
