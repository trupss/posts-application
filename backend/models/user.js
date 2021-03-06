const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number },
    userLocked: { type: Boolean, required: true, default: false }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);