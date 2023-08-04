const { Schema, Model } = require("mongoose");

const RoleSchema = new Schema({
  name: String,
  is_active: Boolean,
});

const User = Model("Role", RoleSchema);
module.exports = { User };
