"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformUppercaseFirtsLetterWord = exports.transformUppercase = exports.transformTitle = void 0;
const transformTitle = (country) => {
    return country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();
};
exports.transformTitle = transformTitle;
const transformUppercase = (word) => {
    return word.toUpperCase();
};
exports.transformUppercase = transformUppercase;
const transformUppercaseFirtsLetterWord = (name) => {
    const words = name.split(" ");
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let newWord = (0, exports.transformTitle)(words[i]);
        newWords.push(newWord);
    }
    return newWords.join(" ");
};
exports.transformUppercaseFirtsLetterWord = transformUppercaseFirtsLetterWord;
