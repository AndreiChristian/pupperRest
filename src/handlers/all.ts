import { Request, Response } from "express";
import { db } from "../db/db";

export const getAllDogs = async (req: Request, res: Response) => {
  try {
    const reponse = await db.query("SELECT id, breed FROM dogs", []);

    res.json(reponse.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
