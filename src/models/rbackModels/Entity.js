const { Schema, Model } = require("mongoose");

const EntitySchema = new Schema({
  name: String,
  is_active: Boolean,
});

const Entity = Model("Entity", EntitySchema);
module.exports = { Entity };
