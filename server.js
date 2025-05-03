const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let idCounter = 1;

//Add a New Task
app.post("/addTask", (req,res) => {
    const { taskName } =req.body;
    if (!taskName) return res.status(400).json({ error: "taskName is required"});
    const newTask = { id: idCounter++, taskName };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//Get All Tasks
app.get("/tasks", (req,res) => {
    res.json(tasks);
});

//Delete a Task By ID
app.delete("/tasks/:id", (req,res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !==taskId);
    res.json({ message: `Task with id ${taskId} deleted` });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});