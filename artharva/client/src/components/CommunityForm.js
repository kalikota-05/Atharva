import React, { useState, useEffect } from 'react';
import { getForumPosts, createForumPost } from '../services/forum';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const forumPosts = await getForumPosts();
      setPosts(forumPosts.data);
    };
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    await createForumPost({ content: newPost });
    setNewPost('');
    // Refresh posts after submission
    const forumPosts = await getForumPosts();
    setPosts(forumPosts.data);
  };

  return (
    <div>
      <h2>Community Forum</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;