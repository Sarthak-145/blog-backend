import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
const hostname = process.env.HOST || "127.0.0.1";

//routes
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});
