import { Post } from "../models/post.model.js";

// Create a new post
const createPost = async (req, res) => {
  try {
    const { name, discription, age } = req.body;

    if (!name || !discription || age === undefined) {
      return res
        .status(400)
        .json({ message: "name, discription and age are required" });
    }

    const newPost = await Post.create({
      name,
      discription,
      age,
    });

    return res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

// Get all posts
const getAllPosts = async (_req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve posts",
      error: error.message,
    });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve post",
      error: error.message,
    });
  }
};

// Update a post by ID
const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, discription, age } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { name, discription, age },
      { new: true, runValidators: true },
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update post",
      error: error.message,
    });
  }
};

// Delete a post by ID
const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete post",
      error: error.message,
    });
  }
};

export { createPost, getAllPosts, getPostById, updatePostById, deletePostById };
