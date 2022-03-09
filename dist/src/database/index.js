"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDatabase = () => {
    mongoose_1.default.connect(`mongodb://localhost/${process.env.DATABASE}`).then(() => {
        console.log('Connect Database!');
    }).catch((err) => console.log(err));
};
exports.default = connectDatabase;
