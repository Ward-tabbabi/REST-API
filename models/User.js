const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstname: { type: String, require },
  lastname: { type: String, require },
  email: String,
  sign_in: { type: Date, default: Date.now },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
