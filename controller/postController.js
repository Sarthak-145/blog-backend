import pool from "../db/index.js";

const createPost = async (req, res) => {
  const { title, content } = req.body;
  //userId will be from login info.
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

export default createPost;
