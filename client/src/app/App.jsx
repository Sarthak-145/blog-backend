import { useState, useEffect } from 'react';
import { createPost, getPosts } from '../services/posts.service';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect fired');

    getPosts()
      .then((res) => {
        console.log('API res', res);
        console.log('API data', res.data);

        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.log('API Error', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.post_id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By {post.username}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
