import express from "express";
import { config } from "dotenv";

import apiRouter from "./handlers/index";
import { cors } from "./middleware/cors";
import { perHourLimiter, perSecondLimiter } from "./middleware/throttle";

config();
const port = process.env.PORT || 3333;

const app = express();

app.use(cors);
app.use(perSecondLimiter);
app.use(perHourLimiter);

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
