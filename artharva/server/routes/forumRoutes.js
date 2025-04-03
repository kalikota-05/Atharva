const express = require('express');
const { getForumPosts, createForumPost } = require('../controllers/forumController');
const router = express.Router();

router.get('/', getForumPosts);
router.post('/', createForumPost);

module.exports = router;