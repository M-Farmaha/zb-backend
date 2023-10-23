import express from "express";
import cors from "cors";

import authRouter from "./routes/api/auth-router.js";
import dealsRouter from "./routes/api/deals-router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRouter);
app.use("/deals", dealsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

export default app;
