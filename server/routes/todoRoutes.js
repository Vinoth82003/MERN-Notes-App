const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const currentDateInIST = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});

// Create a new Date object from the string
const currentDateIST = new Date(currentDateInIST);

// Extract date and time components
const date = currentDateIST.toLocaleDateString("en-IN");
const time = currentDateIST.toLocaleTimeString("en-IN");
// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a todo
router.post("/", async (req, res) => {
  // Removed "/api/todos"
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    createdAt: date + " : " + time,
    lastUpdate: date + " : " + time,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (req.body.title) {
      todo.title = req.body.title;
    }
    if (req.body.description) {
      todo.description = req.body.description;
    }
    console.log("after 2 if clause");

    todo.lastUpdate = date + " : " + time;
    // console.log(todo);
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const list = Todo.findById(id);
    // await Todo.findByIdAndRemove(req.params.id);
    // console.log(list);
    await Todo.deleteOne(list);
    res.json({ status: "success", message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
