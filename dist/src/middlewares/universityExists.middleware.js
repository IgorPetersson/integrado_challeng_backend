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
exports.universityExists = void 0;
const university_1 = __importDefault(require("../models/university"));
const error_1 = require("../utils/error");
const universityExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const universities = yield university_1.default.findOne({ name: data.name, country: data.country, alpha_two_code: data.alpha_two_code });
    if (universities) {
        next(new error_1.ErrorHandler(409, "This university already exists"));
    }
    next();
});
exports.universityExists = universityExists;
