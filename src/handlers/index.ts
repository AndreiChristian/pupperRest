import { Router } from "express";
import { getAllDogs } from "./all";
import { getOne } from "./one";

const router = Router();

router.get("/all", getAllDogs);
router.get("/:id", getOne);

export default router;
