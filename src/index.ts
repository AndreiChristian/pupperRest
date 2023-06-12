import express from "express";
import { config } from "dotenv";

import apiRouter from "./handlers/index";

config();

const app = express();
const port = process.env.PORT || 3333;

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
