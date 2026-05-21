import { Post } from "../models/post.model.js";
import cloudinary from "../config/cloudinary.js";

// helper: upload buffer to Cloudinary
const uploadToCloudinary = (buffer) =>
  new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream({ folder: 'posts' }, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    uploadStream.end(buffer);
  });

// Create a new post (accepts optional file in `req.file` from multer)
const createPost = async (req, res) => {
  try {
    const { name, discription, age } = req.body;

    if (!name || !discription || age === undefined) {
      return res
        .status(400)
        .json({ message: "name, discription and age are required" });
    }

    let imageUrl = null;
    if (req.file && req.file.buffer) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const newPost = await Post.create({
      name,
      discription,
      age,
      image: imageUrl,
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

// Get all posts (with search and pagination feature)
const getAllPosts = async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;
    
    // Build query object for search functionality
    const query = {};
    if (search) {
      query.name = { $regex: search, $options: "i" }; // Case-insensitive search by name
    }

    // Pagination logic
    const skip = (page - 1) * limit;

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const totalPosts = await Post.countDocuments(query);

    return res.status(200).json({
      posts,
      currentPage: Number(page),
      totalPages: Math.ceil(totalPosts / limit),
      totalPosts
    });
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
