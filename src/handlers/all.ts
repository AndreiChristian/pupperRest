import { Request, Response } from "express";
import { db } from "../db/db";

export const getAllDogs = async (req: Request, res: Response) => {
  try {
    const { rows } = await db.query("SELECT id, breed FROM dogs", []);

    if (!rows) {
      throw new Error("Could not fethc data");
    }

    res.json(rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
