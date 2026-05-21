import { Router } from "express";
import multer from 'multer';
// use memory storage so we can upload buffer straight to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });
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
  const { name, discription, age } = req.body;
  if (!name || !discription || age === undefined) {
    return res.status(400).json({ message: "Name, discription, and age are required" });
  }
  if (name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
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
router.route("/").post(validatePostInput, upload.single('image'), createPost).get(getAllPosts);

// Simple about route for quick API info
const apiInfo = {
  name: "Post API",
  version: "1.0.0",
  description: "A small Express router for managing posts",
  endpoints: ["GET /", "POST /", "GET /:id", "PUT /:id", "DELETE /:id"],
};

router.get("/about", (req, res) => {
  res.status(200).json({
    message: "Welcome to the post API",
    apiInfo,
    timestamp: new Date().toISOString(),
  });
});

router
  .route("/:id")
  .get(getPostById)
  .put(validatePostInput, updatePostById)
  .delete(deletePostById);

export default router;
