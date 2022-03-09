"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUniversity = exports.updateUniversity = exports.getOneUniversity = exports.listUniversity = exports.createUniversity = void 0;
const university_service_1 = require("../services/university.service");
const createUniversity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const university = yield (0, university_service_1.createUniversityService)(data);
        res.status(201).send(university);
    }
    catch (err) {
        next(err);
    }
});
exports.createUniversity = createUniversity;
const listUniversity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = req.query;
        const universities = yield (0, university_service_1.listUniversityService)(queryParams);
        res.send(universities);
    }
    catch (err) {
        next(err);
    }
});
exports.listUniversity = listUniversity;
const getOneUniversity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const university = yield (0, university_service_1.getOneUniversityService)(id);
        res.send(university);
    }
    catch (err) {
        next(err);
    }
});
exports.getOneUniversity = getOneUniversity;
const updateUniversity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        yield (0, university_service_1.updateUniversityService)(id, data);
        const universityUpdated = yield (0, university_service_1.getOneUniversityService)(id);
        res.send(universityUpdated);
    }
    catch (err) {
        next(err);
    }
});
exports.updateUniversity = updateUniversity;
const deleteUniversity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, university_service_1.deleteUniversityService)(id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUniversity = deleteUniversity;
