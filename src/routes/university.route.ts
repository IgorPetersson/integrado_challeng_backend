import { Express, Router } from "express";
import { createUniversity, deleteUniversity, getOneUniversity, listUniversity, updateUniversity } from "../controllers/university.controllers";
import { universityExists, validateCreateUniversity, validateUpdateUniversity, universityNotFound } from "../middlewares";

const route = Router();

export const universityRoute = (app: Express) => {
    route.post("",validateCreateUniversity, universityExists, createUniversity)
    route.get("", listUniversity)
    route.get("/:id", getOneUniversity)
    route.put("/:id",universityNotFound, validateUpdateUniversity, updateUniversity)
    route.delete("/:id",universityNotFound, deleteUniversity)
    app.use("/universities", route)
}