"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs_1 = require("fs");
class CsvReader {
    constructor(file) {
        this.file = file;
        this.data = [];
    }
    read() {
        this.data = (0, fs_1.readFileSync)(this.file, { encoding: 'utf-8' })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapData);
    }
}
exports.CsvReader = CsvReader;
