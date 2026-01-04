import { register, login, getMe } from '../controller/authController.js';
import authenticateToken from '../middleware/authMiddleware.js';
import express from 'express';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken, getMe);

export default router;
