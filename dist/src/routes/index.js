"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesApp = void 0;
const express_1 = __importDefault(require("express"));
const university_route_1 = require("./university.route");
const routesApp = (app) => {
    app.use(express_1.default.json());
    (0, university_route_1.universityRoute)(app);
};
exports.routesApp = routesApp;
