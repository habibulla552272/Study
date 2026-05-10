import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controllers/post.controller.js";

const router = Router();
router.route("/").post(createPost).get(getAllPosts);

router
  .route("/:id")
  .get(getPostById)
  .put(updatePostById)
  .delete(deletePostById);

export default router;
