import { useEffect, useState } from 'react';
import axios from 'axios';

function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/forum');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Forum</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>By {post.author.username}</small>
        </div>
      ))}
    </div>
  );
}

export default Forum;
