import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post("/login", controller.sysAdmin.login);
  router.post("/sysadmin/queryAll", controller.sysAdmin.queryAll);
  router.post("/sysadmin/add", controller.sysAdmin.save);
  router.post("/sysadmin/update", controller.sysAdmin.update);

  router.post("/sysrole/queryAll", controller.sysRole.queryAll);
  router.post("/sysrole/add", controller.sysRole.save);
  router.post("/sysrole/update", controller.sysRole.update);
};
