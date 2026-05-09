import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controllers/post.controller.js";

const router = Router();

// Validation middleware
const validatePostInput = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  if (title.length < 3) {
    return res
      .status(400)
      .json({ message: "Title must be at least 3 characters" });
  }
  next();
};

// Logging middleware
const logRequest = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
};

// Apply logging to all routes
router.use(logRequest);

// Routes
router.route("/").post(validatePostInput, createPost).get(getAllPosts);

// Simple about route for quick API info
const apiInfo = {
  name: "Post API",
  version: "1.0.0",
  description: "A small Express router for managing posts",
  endpoints: ["GET /", "POST /", "GET /:id", "PUT /:id", "DELETE /:id"],
};

const randomPostIdeas = [
  "Write a post about your favorite coding shortcut.",
  "Share one backend debugging trick that saved your day.",
  "Describe a small project you want to build next.",
  "Explain a bug you fixed and what caused it.",
];

const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

router.get("/about", (req, res) => {
  res.status(200).json({
    message: "Welcome to the post API",
    apiInfo,
    timestamp: new Date().toISOString(),
  });
});

router.get("/random", (req, res) => {
  res.status(200).json({
    message: "Random post idea generated",
    idea: getRandomItem(randomPostIdeas),
    seed: Math.random().toString(36).slice(2, 8),
  });
});

router
  .route("/:id")
  .get(getPostById)
  .put(validatePostInput, updatePostById)
  .delete(deletePostById);

export default router;
