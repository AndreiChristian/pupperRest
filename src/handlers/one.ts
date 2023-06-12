import { Request, Response } from "express";
import { db } from "../db/db";

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const reponse = await db.query("SELECT * FROM dogs WHERE id = $1", [id]);

    res.json(reponse.rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
