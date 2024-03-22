const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "username is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        required: [true, "please Enter password"],
    },
}, {
    timestamps: true,
});

const user = mongoose.model("User", UserSchema);

module.exports = user;