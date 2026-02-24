import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todos.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Health check route (good for Docker + testing)
app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

export default app;