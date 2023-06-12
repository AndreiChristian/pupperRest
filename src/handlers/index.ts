import { Router } from "express";
import { getAllDogs } from "./all";
import { getOne } from "./one";
import { getFilteredDogs } from "./filter";

const router = Router();

router.get("/all", getAllDogs);
router.get("/filter", getFilteredDogs);
router.get("/:id", getOne);

export default router;
