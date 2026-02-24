import express from "express";
import { validateTodo } from "../services/todoService.js";
import { addTodo, getTodos } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getTodos());
});

router.post("/", (req, res) => {
  try {
    validateTodo(req.body.title);

    const newTodo = {
      id: Date.now(),
      title: req.body.title,
    };

    addTodo(newTodo);

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;