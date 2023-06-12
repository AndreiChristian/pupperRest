import { Request, Response } from "express";
import { db } from "../db/db";

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

export const getFilteredDogs = async (req: Request, res: Response) => {
  try {
    let queryParameters: QueryParameters = {
      breed: (req.query.breed as string) || "",
      size: (req.query.size as string) || "",
      function: (req.query.use as string) || "",
      purpose: (req.query.purpose as string) || "",
      coat_type: (req.query.coatType as string) || "",
      temperament: (req.query.temperament as string) || "",
      origin: (req.query.origin as string) || "",
      working_group: (req.query.workingGroup as string) || "",
      life_expectancy: (req.query.lifeExpectancy as string) || "",
      exercise_needs: (req.query.exerciseNeeds as string) || "",
      trainability: (req.query.trainability as string) || "",
    };

    // initializing the base query

    let query = "SELECT * FROM dogs WHERE"; //query
    const values: string[] = []; //values
    let counter = 1;

    // get the query params

    Object.entries(queryParameters).forEach(([index, value]) => {
      if (value) {
        while (value.includes("\n")) {
          value = value.slice(0, -1);
        }

        query += ` ${index} = $${counter} AND`;
        counter++;
        values.push(value);
      }
    });

    query = query.slice(0, -3);

    const { rows } = await db.query(query, values);

    console.table(values);

    if (!rows) {
      throw new Error("Error fetching data");
    }

    res.json(rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
