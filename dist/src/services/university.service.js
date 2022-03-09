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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUniversityService = exports.deleteUniversityService = exports.updateUniversityService = exports.listUniversityService = exports.createUniversityService = void 0;
const university_1 = __importDefault(require("../models/university"));
const error_1 = require("../utils/error");
const transform_1 = require("../utils/transform");
const createUniversityService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield university_1.default.create(data);
    const university = yield university_1.default.findOne(data);
    const universityShow = {
        __id: university._id,
        alpha_two_code: university.alpha_two_code,
        name: university.name,
        country: university.country,
        "state-province": university["state-province"],
        web_pages: university.web_pages,
        domains: university.domains,
    };
    return universityShow;
});
exports.createUniversityService = createUniversityService;
const listUniversityService = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    let page = parseInt(queryParams.page) || 1;
    const country = queryParams.country;
    let universities = yield university_1.default.find();
    if (universities.length == 0) {
        return [];
    }
    if (country) {
        let titleCountry = (0, transform_1.transformTitle)(country);
        universities = universities.filter((university) => university.country == titleCountry);
    }
    let finish = page * 20;
    let start = (page * 20) - 20;
    if ((page - 1) * 20 > universities.length || universities.length == 0) {
        throw (new error_1.ErrorHandler(404, "page not found"));
    }
    if (page * 20 > universities.length) {
        finish = universities.length;
    }
    const universitiesShow = [];
    for (let i = start; i < finish; i++) {
        const universityShow = {
            _id: universities[i]._id,
            alpha_two_code: universities[i].alpha_two_code,
            name: universities[i].name,
            country: universities[i].country,
        };
        universitiesShow.push(universityShow);
    }
    return universitiesShow;
});
exports.listUniversityService = listUniversityService;
const updateUniversityService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield university_1.default.updateOne({ _id: id }, data);
});
exports.updateUniversityService = updateUniversityService;
const deleteUniversityService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield university_1.default.deleteOne({ _id: id });
});
exports.deleteUniversityService = deleteUniversityService;
const getOneUniversityService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const university = yield university_1.default.findOne({ _id: id });
    const universityShow = {
        _id: university._id,
        alpha_two_code: university.alpha_two_code,
        name: university.name,
        country: university.country,
        "state-province": university["state-province"],
        domains: university.domains,
        web_pages: university.web_pages
    };
    return universityShow;
});
exports.getOneUniversityService = getOneUniversityService;
