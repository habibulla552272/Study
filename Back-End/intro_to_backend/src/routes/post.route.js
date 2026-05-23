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
  // accept either `description` or the existing misspelled `discription`
  if (req.body.description && !req.body.discription) {
    req.body.discription = req.body.description;
  }

  const { name, discription, age } = req.body;
  if (!name || !discription || age === undefined) {
    return res.status(400).json({ message: "Name, description (or discription), and age are required" });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: "Name must be at least 3 characters" });
  }
  // ensure age is a number (allow numeric strings)
  const numericAge = Number(age);
  if (Number.isNaN(numericAge)) {
    return res.status(400).json({ message: "Age must be a number" });
  }
  req.body.age = numericAge;
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

// Multer / upload error handler + generic router error handler
router.use((err, req, res, next) => {
  if (!err) return next();
  // Multer errors have a `code` or `name` property
  if (err instanceof multer.MulterError || err.name === 'MulterError') {
    return res.status(400).json({ message: err.message || 'File upload error', code: err.code });
  }
  console.error('Router error:', err);
  return res.status(500).json({ message: 'Internal server error', error: err.message });
});

export default router;
