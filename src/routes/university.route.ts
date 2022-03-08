import { Express, Router } from "express";
import { createUniversity, deletUniversity, getOneUniversity, listUniversity, updateUniversity } from "../controllers/university.controllers";
import { universityExists, validateCreateUniversity } from "../middlewares";

const route = Router();

export const universityRoute = (app: Express) => {
    route.post("",validateCreateUniversity, universityExists, createUniversity)
    route.get("", deletUniversity)
    route.get("/:id", getOneUniversity)
    route.put("/:id", listUniversity)
    route.delete("/:id", updateUniversity)
    app.use("/universities", route)
}