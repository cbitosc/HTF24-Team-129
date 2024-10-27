const express = require('express');
const Post = require('../models/post');
const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});

// Create a post
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const newPost = new Post({ title, content, author });
  await newPost.save();
  res.status(201).json(newPost);
});

module.exports = router;