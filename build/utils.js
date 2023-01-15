"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (strDate) => {
    const arr = strDate
        .split('/')
        .map(s => parseInt(s));
    return new Date(arr[2], arr[1] - 1, arr[0]);
};
exports.stringToDate = stringToDate;
