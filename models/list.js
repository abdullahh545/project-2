const mongoose = require('mongoose');

const listschema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
})

    const list = mongoose.model("List", listschema);

    module.exports = list;

