const { Schema, Model, Types } = require("mongoose");

const RolePermissionSchema = new Schema({
  role_id: {
    type: Types.ObjectId,
    ref: "Role",
  },
  entity_id: {
    type: Types.ObjectId,
    ref: "Entity",
  },
});

const RolePermission = Model("RolePermission", RolePermissionSchema);
module.exports = { RolePermission };
