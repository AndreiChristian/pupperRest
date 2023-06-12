import express, { Request, Response } from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3333;

app.get("/", async (req: Request, res: Response) => {
  res.json(port);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
