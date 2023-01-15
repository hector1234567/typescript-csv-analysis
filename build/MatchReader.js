"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = exports.MatchResult = void 0;
const CsvReader_1 = require("./CsvReader");
const utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
class MatchReader extends CsvReader_1.CsvReader {
    mapData(row) {
        return [
            (0, utils_1.stringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
