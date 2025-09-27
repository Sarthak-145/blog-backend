import pool from "../db/index.js";

//creating new post
export const createPost = async (req, res) => {
  const { title, content } = req.body;
  //userId from middleware
  const userId = req.user.userId;

  try {
    const result = await pool.query(
      `INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING*`,
      [userId, title, content]
    );
    res.status(201).json({ post: result.rows[0] });
  } catch (err) {
    console.log("Error creating post: ", err);
    res.status(500).json({ msg: `Error creating post: ${err}` });
  }
};

//fetching all the posts
export const getPost = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT posts.id, posts.title, posts.content, posts.created_at, users.username
      FROM posts 
      INNER JOIN users ON posts.user_id = users.id 
      ORDER BY posts.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.log(`Error fetching post, err: ${err}`);
    res
      .status(500)
      .json({ success: false, msg: "can't get all the post", err: err.msg });
  }
};
