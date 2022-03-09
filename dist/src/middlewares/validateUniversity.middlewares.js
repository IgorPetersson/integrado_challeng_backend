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
exports.validateUpdateUniversity = exports.validateCreateUniversity = void 0;
const error_1 = require("../utils/error");
const transform_1 = require("../utils/transform");
const university_1 = __importDefault(require("../models/university"));
const validateCreateUniversity = (req, res, next) => {
    const data = req.body;
    const keysRequired = ["alpha_two_code", "name", "country", "domains", "web_pages"];
    const keysMissing = [];
    for (let i = 0; i < keysRequired.length; i++) {
        if (Object.keys(data).includes(keysRequired[i]) == false) {
            keysMissing.push(keysRequired[i]);
        }
    }
    if (keysMissing.length > 0) {
        next(new error_1.ErrorHandler(400, "the keys missing: " + keysMissing.join(", ")));
    }
    const stringKeys = ["alpha_two_code", "name", "country", "state-province"];
    if (Object.keys(data).includes("state-province") == false) {
        stringKeys.pop();
    }
    const arrKeys = ["domains", "web_pages"];
    const arrKeysMissing = [];
    const stringKeysMissing = [];
    for (let i = 0; i < stringKeys.length; i++) {
        if (typeof data[stringKeys[i]] != 'string') {
            stringKeysMissing.push(stringKeys[i]);
        }
    }
    if (stringKeysMissing.length > 0) {
        next(new error_1.ErrorHandler(400, "the keys: " + stringKeysMissing.join(", ") + " must be strings"));
    }
    for (let i = 0; i < arrKeys.length; i++) {
        if (Array.isArray(data[arrKeys[i]]) == false) {
            arrKeysMissing.push(arrKeys[i]);
        }
    }
    if (arrKeysMissing.length > 0) {
        next(new error_1.ErrorHandler(400, "the keys: " + arrKeysMissing.join(", ") + " must be arrays"));
    }
    if (data["alpha_two_code"].length != 2) {
        next(new error_1.ErrorHandler(400, "The state abbreviation is exactly 2 characters long"));
    }
    if (data["state-province"] == undefined) {
        req.body["state-province"] = null;
    }
    req.body.name = (0, transform_1.transformUppercaseFirtsLetterWord)(data.name);
    req.body.country = (0, transform_1.transformUppercaseFirtsLetterWord)(data.country);
    req.body.alpha_two_code = (0, transform_1.transformUppercase)(data.alpha_two_code);
    next();
};
exports.validateCreateUniversity = validateCreateUniversity;
const validateUpdateUniversity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const availableKeys = ["domains", "web_pages", "name"];
    const data = req.body;
    for (let i = 0; i < Object.keys(data).length; i++) {
        if (availableKeys.includes(availableKeys[i]) == false) {
            next(new error_1.ErrorHandler(400, 'It is only allowed to change the fields ' + availableKeys.join(", ")));
        }
    }
    if (Object.keys(data).includes("name") == true) {
        const id = req.params.id;
        const university = yield university_1.default.findOne({ _id: id });
        const universityExists = yield university_1.default.findOne({ name: data.name, country: university.country, alpha_two_code: university.alpha_two_code });
        if (universityExists) {
            next(new error_1.ErrorHandler(409, "This university already exists"));
        }
    }
    if (Object.keys(data).includes("web_pages") == true) {
        if (Array.isArray(data["web_pages"]) == false) {
            next(new error_1.ErrorHandler(400, "an array must be provided for the web_pages field"));
        }
    }
    if (Object.keys(data).includes("domains") == true) {
        if (Array.isArray(data["domains"]) == false) {
            next(new error_1.ErrorHandler(400, "an array must be provided for the domains field"));
        }
    }
    next();
});
exports.validateUpdateUniversity = validateUpdateUniversity;
