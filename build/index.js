"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const buffer = (0, fs_1.readFileSync)('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(row => {
    return row.split(',');
});
//console.log(buffer)
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manchesterWins = 0;
buffer.forEach(row => {
    if (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) {
        manchesterWins++;
    }
    if (row[2] === 'Man United' && row[5] === MatchResult.AwayWin) {
        manchesterWins++;
    }
});
console.log(manchesterWins);
