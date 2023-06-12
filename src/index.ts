import express, { Request, Response } from "express";
import { config } from "dotenv";
import { db } from "./db/db";

config();

const app = express();
const port = process.env.PORT || 3333;

app.get("/", async (req: Request, res: Response) => {
  try {
    const reponse = await db.query("SELECT NOW()", []);

    res.json(reponse.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
