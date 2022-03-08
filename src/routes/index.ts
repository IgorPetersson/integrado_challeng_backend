import express,{ Express } from "express";
import { universityRoute } from "./university.route";

export const routesApp = (app: Express) => {
    app.use(express.json())
    universityRoute(app)
}