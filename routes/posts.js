import {
  createPost,
  getPost,
  getPostWithId,
} from "../controller/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/", authenticateToken, createPost);
router.get("/", getPost);
router.get("/:id", getPostWithId);
export default router;
