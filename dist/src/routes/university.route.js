"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.universityRoute = void 0;
const express_1 = require("express");
const university_controllers_1 = require("../controllers/university.controllers");
const middlewares_1 = require("../middlewares");
const route = (0, express_1.Router)();
const universityRoute = (app) => {
    route.post("", middlewares_1.validateCreateUniversity, middlewares_1.universityExists, university_controllers_1.createUniversity);
    route.get("", university_controllers_1.listUniversity);
    route.get("/:id", middlewares_1.universityNotFound, university_controllers_1.getOneUniversity);
    route.put("/:id", middlewares_1.universityNotFound, middlewares_1.validateUpdateUniversity, university_controllers_1.updateUniversity);
    route.delete("/:id", middlewares_1.universityNotFound, university_controllers_1.deleteUniversity);
    app.use("/universities", route);
};
exports.universityRoute = universityRoute;
