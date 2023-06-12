import { Router } from "express";
import { getAllDogs } from "./all";

const router = Router();

router.get("/all", getAllDogs);

export default router;
