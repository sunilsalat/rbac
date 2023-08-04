const { Schema, Model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
});

const User = Model("User", UserSchema);
module.exports = { User };
