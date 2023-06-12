import express, { Request, Response } from "express";
import { config } from "dotenv";
import { db } from "./db/db";

config();

const app = express();
const port = process.env.PORT || 3333;

app.get("/", async (req: Request, res: Response) => {
  try {
    const reponse = await db.query("SELECT id, breed FROM dogs", []);

    res.json(reponse.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

interface QueryParameters {
  breed?: string;
  size?: string;
  function?: string;
  purpose?: string;
  coat_type?: string;
  temperament?: string;
  origin?: string;
  working_group?: string;
  life_expectancy?: string;
  exercise_needs?: string;
  trainability?: string;
}

app.get("/dogs", async (req: Request, res: Response) => {
  try {
    let queryParameters: QueryParameters = {
      breed: req.query.breed as string,
      size: req.query.size as string,
      function: req.query.use as string,
      purpose: req.query.purpose as string,
      coat_type: req.query.coatType as string,
      temperament: req.query.temperament as string,
      origin: req.query.origin as string,
      working_group: req.query.workingGroup as string,
      life_expectancy: req.query.lifeExpectancy as string,
      exercise_needs: req.query.exerciseNeeds as string,
      trainability: req.query.trainability as string,
    };

    // Remove undefined parameters
    queryParameters = Object.entries(
      Object.entries(queryParameters).filter(([_, v]) => v != null)
    ) as QueryParameters;

    let baseQuery = `SELECT * FROM dogs WHERE `;
    let values: string[] = [];
    let valueCounter = 1;

    for (let param in queryParameters) {
      baseQuery += `${param} = $${valueCounter} AND `;
      values.push(queryParameters[param as keyof QueryParameters] as string);
      valueCounter++;
    }

    baseQuery = baseQuery.slice(0, -4); // remove the last 'AND '

    const result = await db.query(baseQuery, values);
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
