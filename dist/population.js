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
const axios_1 = __importDefault(require("axios"));
const mongoose_1 = __importDefault(require("mongoose"));
const university_1 = __importDefault(require("./src/models/university"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const population = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect(`mongodb://localhost/${process.env.DATABASE}`);
    const countrys = [
        "argentina",
        "brazil",
        "chile",
        "colombia",
        "paraguai",
        "peru",
        "suriname",
        "uruguay"
    ];
    const api = axios_1.default.create({
        baseURL: "http://universities.hipolabs.com"
    });
    const universities = [];
    for (let i = 0; i < countrys.length; i++) {
        const universitiesCountry = yield api.get(`/search?country=${countrys[i]}`);
        universities.push(universitiesCountry.data);
    }
    for (let i = 0; i < universities.length; i++) {
        for (let j = 0; j < universities[i].length; j++) {
            const university = yield university_1.default.findOne({ name: universities[i][j].name, alpha_two_code: universities[i][j].alpha_two_code, country: universities[i][j].country });
            if (!university) {
                yield university_1.default.create(universities[i][j]);
            }
        }
    }
    mongoose_1.default.disconnect();
});
population();
