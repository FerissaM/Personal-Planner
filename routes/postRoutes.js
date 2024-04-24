const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Update a post
router.put('/:id', async (req, res) => {
  try {
    // Fetch the post by ID
    const post = await Post.findById(req.params.id);
    // Check if post exists
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    // Check if the logged-in user is the owner of the post
    if (post.author !== req.user._id) {
      return res.status(403).json({ error: 'Unauthorized - You do not own this post' });
    }
    // Update the post
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    // Fetch the post by ID
    const post = await Post.findById(req.params.id);
    // Check if post exists
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    // Check if the logged-in user is the owner of the post
    if (post.author !== req.user._id) {
      return res.status(403).json({ error: 'Unauthorized - You do not own this post' });
    }
    // Delete the post
    await post.remove();
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
