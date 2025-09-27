import createPost from "../controller/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/", authenticateToken, createPost);

export default router;
