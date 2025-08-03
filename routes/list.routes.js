
const express = require("express");
const router = express.Router();
const List = require("../models/list")
const Task = require("../models/task");

router.get("/", async (req, res) => {
    try {
        const lists = await List.find({ user: req.session.user._id });

        const listsWithTasks = await Promise.all(
            lists.map(async (list) => {
                const tasks = await Task.find({ list: list._id });
                return { ...list.toObject(), tasks };
            })
        );

        res.render("list/index", { lists: listsWithTasks, error: null });
    } catch (error) {
        res.render("list/index", { lists: [], error: "Failed to fetch lists." });
    }
});


    router.get("/new", (req, res) => {
  console.log("get /lists/new route hit");
  res.render("list/new", {error: null})
});


    router.post("/", async (req, res) => {
        try {
            console.log("Creating list with data:", req.body);
        console.log("User ID:", req.session.user._id);
        

            const list = new List({
                title: req.body.title,
                user: req.session.user._id
            });
            console.log("List object created:", list);
            await list.save();
            console.log("List saved successfully");
            res.redirect("/lists");
        } catch (error) {
            console.error("Error creating list:", error);
            res.render("list/new", { error: "Failed to create list." });
        }
    });


    router.get("/:id/edit", async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        if (!list) {
            return res.redirect("/lists");
        }
        res.render("list/edit", { list });
    } catch (error) {
        res.redirect("/lists");
    }
});

router.post("/:id", async (req, res) => {
    try {
        await List.findByIdAndUpdate(req.params.id, {
            title: req.body.title
        });
        res.redirect("/lists");
    } catch (error) {
        res.redirect("/lists");
    }
});

router.post("/:id/delete", async (req, res) => {
    try {
        
        await Task.deleteMany({ list: req.params.id });
        
        await List.findByIdAndDelete(req.params.id);
        res.redirect("/lists");
    } catch (error) {
        res.redirect("/lists");
    }
});






    module.exports = router;

    
