const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String, required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean, default: false
    },
     list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
        required: true
    },
    category: {
    type: String,
    required: [true, "Category is required"],
},

})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
