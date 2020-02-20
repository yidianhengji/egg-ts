'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const SysAdmin = app.model.define('tb_sys_admin', {
    uuid: {
      type: STRING,
      primaryKey: true,
    },
    name: STRING,
    phone: STRING,
    password: STRING,
    role_id: STRING,
    head_pic: STRING,
    status: INTEGER,
    create_time: DATE,
    modify_time: DATE
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  return SysAdmin;
};