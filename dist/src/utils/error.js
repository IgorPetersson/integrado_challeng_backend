"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ErrorHandler = ErrorHandler;
const handleError = (err, res) => {
    const { message, statusCode } = err;
    res.status(err.statusCode || 400).send({
        status: "error",
        statusCode,
        message,
    });
};
exports.handleError = handleError;
