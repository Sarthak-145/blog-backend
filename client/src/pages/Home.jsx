import { useState, useEffect } from 'react';
import { getPosts } from '../services/posts.service';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect fired');

    getPosts()
      .then((res) => {
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
    <>
      <div className="flex flex-col px-10 mx-20">
        <h2 className="text-3xl bg-surface font-semibold text-primary m-6">
          Posts to Read
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div
              key={post.post_id}
              className="rounded-lg border border-cyan-500/20 bg-slate-900 h-56 p-4 rounded-lg flex flex-col shadow"
            >
              <h4 className="text-xl font-medium text-cyan-300 mb-2">
                {post.title}
              </h4>

              <p className="text-slate-300 leading-relaxed mb-3 line-clamp-4">
                {post.content}
              </p>

              <small className="text-sm text-cyan-500">
                By {post.username}
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
