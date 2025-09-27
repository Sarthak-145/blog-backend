import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import postsRouter from "./routes/posts.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
const hostname = process.env.HOST || "127.0.0.1";

//routes
app.use("/api/auth", authRouter);

//post routes
// app.use("/api/posts", (req, res, next) => {
//   console.log(req.headers);
//   next();
// });
app.use("/api/posts", postsRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});
