'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const SysRole = app.model.define('tb_sys_role', {
    uuid: {
      type: STRING,
      primaryKey: true,
    },
    name: STRING,
    description: STRING,
    isDelete: {
      type: INTEGER,
      field: "is_delete"
    },
    createTime: {
      type: DATE,
      field: "create_time"
    },
    modifyTime: {
      type: DATE,
      field: "modify_time"
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  return SysRole;
};