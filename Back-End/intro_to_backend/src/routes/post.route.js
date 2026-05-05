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
router
  .route("/:id")
  .get(getPostById)
  .put(validatePostInput, updatePostById)
  .delete(deletePostById);

export default router;
