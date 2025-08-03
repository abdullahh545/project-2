const express = require("express")
const router = express.Router()
const Task = require("../models/task")
const List = require("../models/list")



router.get("/list/:listId/tasks", async (req, res) => {
    const listId = req.params.listId;
   console.log("Showing new task form for list:", listId);
    res.render("task/new", { listId, error: null });

});

router.post("/list/:listId/tasks", async (req, res) => {
    try {
        console.log("Creating task with data:", req.body);
        console.log("List ID:", req.params.listId);

       const task = new Task({
    title: req.body.title,
    description: req.body.description,
    list: req.params.listId,
    category: req.body.category 
});
    

     console.log("Task object created:", task);
       await task.save();
       console.log("Task saved successfully");
        res.redirect("/lists");

    } catch (error) {
        console.error("Error creating task:", error);
        res.render("task/new", { error: "Failed to create task.", listId: req.params.listId });
    }

});

router.get("/:id/edit", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.redirect("/lists");
        }
        res.render("task/edit", { task });
    } catch (error) {
        res.redirect("/lists");
    }
});


router.post("/:id", async (req, res) => {
    try {
    await Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        completed: req.body.completed === "on"
    });
    res.redirect("/lists");
    } catch (error) {
        res.redirect("/lists");
    }

});


router.post("/:id/delete", async (req, res) => {
    try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/lists");
    } catch (error) {
        res.redirect("/lists");
    }
});




module.exports = router;