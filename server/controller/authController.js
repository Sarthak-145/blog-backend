import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../db/index.js';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

//signing up new user
export const register = async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING*',
      [username, email, hashedPassword]
    );
    const user = result.rows[0];
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err.msg });
  }
};

//login a user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    const user = result.rows[0];
    if (!user) {
      return res.status(400).json({ success: false, msg: 'User not found' });
    }
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(400).json({ success: false, msg: 'Invalid password!' });
    }

    const token = jwt.sign({ userId: user.user_id }, jwtSecret, {
      expiresIn: '1d',
    });

    res.json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: 'Error login user' });
  }
};
