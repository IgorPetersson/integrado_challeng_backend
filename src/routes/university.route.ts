import { Express, Router } from "express";
import { createUniversity, deletUniversity, getOneUniversity, listUniversity, updateUniversity } from "../controllers/university.controllers";
import { universityExists, validateCreateUniversity } from "../middlewares";

const route = Router();

export const universityRoute = (app: Express) => {
    route.post("",validateCreateUniversity, universityExists, createUniversity)
    route.get("", listUniversity)
    route.get("/:id", getOneUniversity)
    route.put("/:id", updateUniversity)
    route.delete("/:id", deletUniversity)
    app.use("/universities", route)
}