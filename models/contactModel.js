const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "contact field is required"],
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
    }, 
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("contact", contactSchema);