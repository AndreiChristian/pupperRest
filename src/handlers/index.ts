import { Router } from "express";
import { getAllDogs } from "./all";
import { getOne } from "./one";
import { getFilteredDogs } from "./filter";

const router = Router();

router.get("/all", getAllDogs);
router.get("/:id", getOne);
router.get("/filter", getFilteredDogs);

export default router;
