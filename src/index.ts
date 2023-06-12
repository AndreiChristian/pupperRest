import express from "express";
import { config } from "dotenv";

import apiRouter from "./handlers/index";
import documentationRouter from "./handlers/documentation";
import { cors } from "./middleware/cors";
import { perHourLimiter, perSecondLimiter } from "./middleware/throttle";
import path from "path";

config();
const port = process.env.PORT || 3333;

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors);
app.use(perSecondLimiter);
app.use(perHourLimiter);

app.use("/docs", documentationRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
