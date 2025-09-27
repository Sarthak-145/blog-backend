import { createPost, getPost } from "../controller/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/", authenticateToken, createPost);
router.get("/", getPost);

export default router;
