
import {Post} from '../models/post.model.js';
// Create a new post
export const createPost = async (req, res) => {
  try { 
    const {title, content} = req.body;
    const newPost = await Post.create({title, content});
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({error: 'Failed to create post'});
  }
};
// Get all posts
export const getAllPosts = async (req, res) => {    
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to retrieve posts'});
    }
};
// Get a single post by ID
export const getPostById = async (req, res) => {
    try {


        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.status(200).json(post); 

        } else {
            res.status(404).json({error: 'Post not found'});
        }   
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve post'});
    }
};  