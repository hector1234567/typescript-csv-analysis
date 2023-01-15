"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = exports.MatchResult = void 0;
const utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
class MatchReader {
    constructor(dataReader) {
        this.dataReader = dataReader;
        this.matches = [];
    }
    load() {
        this.dataReader.read();
        this.matches = this.dataReader.data.map((row) => {
            return [
                (0, utils_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
