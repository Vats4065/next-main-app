const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;