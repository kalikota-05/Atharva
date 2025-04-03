const ForumPost = require('../models/ForumPost');

exports.getForumPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching forum posts' });
  }
};

exports.createForumPost = async (req, res) => {
  const { content } = req.body;
  try {
    const newPost = new ForumPost({ content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Error creating forum post' });
  }
};