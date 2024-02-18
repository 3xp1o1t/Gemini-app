import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { generateResponse } from "./controllers/index.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "application/json"],
  }),
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/gen", generateResponse);

// app.get("/gen", (req, res) => {
//   res.send(history);
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
