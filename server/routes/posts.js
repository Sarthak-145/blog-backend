import {
  createPost,
  deletePost,
  getPost,
  getPostWithId,
  updatePost,
} from "../controller/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/", authenticateToken, createPost);
router.get("/", getPost);
router.get("/:id", getPostWithId);
router.put("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);
export default router;
