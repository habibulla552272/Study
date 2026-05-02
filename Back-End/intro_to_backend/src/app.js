import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(express.json());
// routes import

const demoMessages = [
  "Express server is running",
  "JSON parsing is enabled",
  "Routes are mounted correctly",
];

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
  });
});

app.get("/api/v1/demo", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Demo route is working",
    demoMessages,
  });
});

app.post("/api/v1/demo/echo", (req, res) => {
  res.status(201).json({
    success: true,
    received: req.body,
    timestamp: new Date().toISOString(),
  });
});

// router declaration

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
